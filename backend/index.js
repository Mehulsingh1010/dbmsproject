const express = require("express");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000; // Or any port you prefer

app.use(bodyParser.json());
app.use(cors());

// Oracle DB connection configuration
const dbConfig = {
  user: "system",
  password: "1234",
  connectString: "172.25.214.40:1521/XE", // Change according to your DB configuration
};

// Route to handle user login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Received login request:", { username, password });

  try {
    const connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `SELECT * FROM users WHERE username = :username`,
      [username],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    console.log("Query result:", result);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      console.log("User data:", user);

      if (user.ID === undefined || user.PASSWORD === undefined) {
        throw new Error("User object does not contain expected properties.");
      }

      const userId = user.ID;
      const userPassword = user.PASSWORD;

      console.log("Comparing password:", {
        provided: password,
        stored: userPassword,
      });

      if (password === userPassword) {
        const token = jwt.sign({ id: userId }, "1234", { expiresIn: "1h" });
        res.json({ token });
        console.log("Successfully logged in!");
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }

    await connection.close();
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Route to handle user registration
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const connection = await oracledb.getConnection(dbConfig);

    const existingUserResult = await connection.execute(
      `SELECT COUNT(*) AS count FROM users WHERE username = :username`,
      [username]
    );

    if (existingUserResult.rows[0].COUNT > 0) {
      res.status(400).json({ message: "User already exists" });
    } else {
      await connection.execute(
        `INSERT INTO users (username, password) VALUES (:username, :password)`,
        [username, password]
      );

      res.status(201).json({ message: "User registered successfully" });
    }

    await connection.commit();
    await connection.close();
  } catch (err) {
    console.error("Server Error:", err);
    if (err.errorNum === 1) {
      res.status(400).json({ message: "User already exists" });
    } else {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
});

// Route to handle form submission for grades
app.post('/submit', async (req, res) => {
  const { subject, marks, maxMarks, classAvg } = req.body;

  if (!subject || marks === undefined || maxMarks === undefined || classAvg === undefined) {
    return res.status(400).send('All fields are required');
  }

  try {
    const connection = await oracledb.getConnection(dbConfig);

    const sql = `INSERT INTO grades (SUBJECT, MARKS, MAX_MARKS, CLASS_AVG) VALUES (:subject, :marks, :maxMarks, :classAvg)`;
    const binds = { subject, marks, maxMarks, classAvg };

    await connection.execute(sql, binds, { autoCommit: true });
    res.status(200).send('Data inserted successfully');
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).send('Error inserting data');
  }
});


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
