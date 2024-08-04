const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000; // Or any port you prefer

app.use(bodyParser.json());
app.use(cors());

// Oracle DB connection configuration
const dbConfig = {
  user: 'system',
  password: '1234',
  connectString: '172.25.242.130:1521/XE'
};

// Function to get a database connection
async function getDBConnection() {
  try {
    console.log('Attempting to connect to the database...');
    const connection = await oracledb.getConnection(dbConfig);
    console.log('Successfully connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Database configuration:', dbConfig);
    
    // Additional debugging information
    if (error.code === 'ECONNREFUSED') {
      console.error('Connection refused. Please check if the database is up and the IP/port is correct.');
    } else if (error.code === 'ORA-12154') {
      console.error('TNS:could not resolve the connect identifier specified. Check the connect string.');
    } else if (error.code === 'ORA-28009') {
      console.error('Connection request has failed because of an invalid password.');
    } else {
      console.error('Unhandled database connection error.');
    }
    
    throw new Error('Database connection error');
  }
}

// Route to handle user login
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

      if (user.PASSWORD === password) { // Direct password comparison (not recommended)
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

// Route to handle user registration
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

// Route to handle form submission for contact
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

// Route to retrieve subjects and calculate grades

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// const express = require('express');
// const oracledb = require('oracledb');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Oracle DB Config
// const dbConfig = {
//     user: 'system',
//     password: '1234',
//     connectString: '172.25.242.130:1521/XE'
// };

// // Login Route
// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   console.log("Received login request:", { username, password });

//   try {
//     const connection = await oracledb.getConnection(dbConfig);

//     const result = await connection.execute(
//       `SELECT * FROM users WHERE username = :username`,
//       [username],
//       { outFormat: oracledb.OUT_FORMAT_OBJECT }
//     );

//     console.log("Query result:", result);

//     if (result.rows.length > 0) {
//       const user = result.rows[0];
//       console.log("User data:", user);

//       if (user.ID === undefined || user.PASSWORD === undefined) {
//         throw new Error("User object does not contain expected properties.");
//       }

//       const userId = user.ID;
//       const userPassword = user.PASSWORD;

//       console.log("Comparing password:", {
//         provided: password,
//         stored: userPassword,
//       });

//       if (password === userPassword) {
//         const token = jwt.sign({ id: userId }, "1234", { expiresIn: "1h" });
//         res.json({ token });
//         console.log("Successfully logged in!");
//       } else {
//         res.status(401).json({ message: "Invalid credentials" });
//       }
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }

//     await connection.close();
//   } catch (err) {
//     console.error("Server Error:", err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

