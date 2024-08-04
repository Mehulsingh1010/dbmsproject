const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const dbConfig = {
  user: 'system',
  password: '1234',
  connectString: '172.25.242.130:1521/XE'
};

async function getDBConnection() {
  try {
    console.log('Attempting to connect to the database...');
    const connection = await oracledb.getConnection(dbConfig);
    console.log('Successfully connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw new Error('Database connection error');
  }
}

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  let connection;
  try {
    connection = await getDBConnection();
    const result = await connection.execute(
      `SELECT * FROM users WHERE username = :username`,
      [username],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    if (result.rows.length > 0) {
      const user = result.rows[0];
      if (user.PASSWORD === password) {
        const token = jwt.sign({ id: user.ID }, '1234', { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error('Error in /login route:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeError) {
        console.error('Error closing the database connection:', closeError.message);
      }
    }
  }
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  let connection;
  try {
    connection = await getDBConnection();
    const existingUserResult = await connection.execute(
      `SELECT COUNT(*) AS count FROM users WHERE username = :username`,
      [username]
    );
    if (existingUserResult.rows[0].COUNT > 0) {
      res.status(400).json({ message: 'User already exists' });
    } else {
      await connection.execute(
        `INSERT INTO users (username, password) VALUES (:username, :password)`,
        [username, password]
      );
      await connection.commit();
      res.status(201).json({ message: 'User registered successfully' });
    }
  } catch (err) {
    console.error('Error in /register route:', err.message);
    if (err.errorNum === 1) {
      res.status(400).json({ message: 'User already exists' });
    } else {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeError) {
        console.error('Error closing the database connection:', closeError.message);
      }
    }
  }
});

app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, mobile, message } = req.body;
  let connection;
  try {
    connection = await getDBConnection();
    const sql = `
      INSERT INTO ContactMessages (first_name, last_name, email, mobile, message)
      VALUES (:firstName, :lastName, :email, :mobile, :message)
    `;
    await connection.execute(sql, {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      mobile: mobile || '',
      message: message || ''
    }, { autoCommit: true });
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error in /contact route:', error.message);
    res.status(500).json({ message: 'Failed to send message.', details: error.message });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeError) {
        console.error('Error closing the database connection:', closeError.message);
      }
    }
  }
});

const calculateGrade = (percentage) => {
  if (percentage >= 90) return 'S';
  if (percentage >= 75) return 'A';
  if (percentage >= 60) return 'B';
  if (percentage >= 50) return 'C';
  if (percentage >= 40) return 'D';
  return 'F';
};

app.post('/result-analysis', async (req, res) => {
  const { userId, subjects } = req.body; // Ensure userId is provided
  let connection;
  try {
    connection = await getDBConnection();

    // Validate and Insert subjects into the Subjects table
    for (const subject of subjects) {
      const { subject_name, max_marks, scored_marks } = subject;

      // Validate numbers
      if (isNaN(max_marks) || isNaN(scored_marks)) {
        throw new Error(`Invalid marks provided: max_marks=${max_marks}, scored_marks=${scored_marks}`);
      }

      // Check if scored_marks is greater than max_marks
      if (parseFloat(scored_marks) > parseFloat(max_marks)) {
        throw new Error('Check details once again: Scored marks cannot be greater than max marks.');
      }

      await connection.execute(
        `INSERT INTO Subjects (user_id, subject_name, max_marks, scored_marks)
         VALUES (:user_id, :subject_name, :max_marks, :scored_marks)`,
        [userId, subject_name, parseFloat(max_marks), parseFloat(scored_marks)],
        { autoCommit: true }
      );
    }

    let totalMarks = 0;
    let totalScored = 0;
    let results = [];
    let hasFailed = false; // Flag to check if any subject has failed

    // Calculate results and store them in the Results table
    for (const subject of subjects) {
      const { subject_name, max_marks, scored_marks } = subject;

      const percentage = (scored_marks / max_marks) * 100;
      const grade = calculateGrade(percentage);
      const status = percentage >= 40 ? 'Pass' : 'Fail';

      if (status === 'Fail') {
        hasFailed = true; // Set flag to true if any subject fails
      }

      totalMarks += parseFloat(max_marks);
      totalScored += parseFloat(scored_marks);

      // Fetch the subject_id for the current subject
      const result = await connection.execute(
        `SELECT id FROM Subjects WHERE user_id = :user_id AND subject_name = :subject_name`,
        [userId, subject_name],
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );

      const subjectId = result.rows.length > 0 ? result.rows[0].ID : null;

      // Insert results into the Results table
      await connection.execute(
        `INSERT INTO Results (user_id, subject_id, percentage, grade, status)
         VALUES (:user_id, :subject_id, :percentage, :grade, :status)`,
        [userId, subjectId, parseFloat(percentage), grade, status],
        { autoCommit: true }
      );

      results.push({ subject_name, percentage, grade, status });
    }

    const overallPercentage = (totalScored / totalMarks) * 100;
    const overallGrade = calculateGrade(overallPercentage);

    // Determine overall status based on the flag
    const overallStatus = hasFailed ? 'Fail' : 'Pass';

    // Adjust the overall grade to "Fail" if any subject failed
    const finalGrade = hasFailed ? 'F' : overallGrade;

    res.json({
      success: true,
      results,
      total: {
        percentage: overallPercentage,
        grade: finalGrade, // Use finalGrade considering individual subject failures
        status: overallStatus // Include overall status
      }
    });
  } catch (err) {
    console.error('Error in /result-analysis route:', err.message);
    res.status(400).json({ message: err.message }); // Send the error message directly
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeError) {
        console.error('Error closing the database connection:', closeError.message);
      }
    }
  }
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
