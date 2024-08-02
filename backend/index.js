const express = require("express");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const dbConfig = {
  user: "system",
  password: "1234",
  connectString: "172.25.214.40:1521/XE",
};

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
        console.log("succesfully logged in ! ");
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

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
      const connection = await oracledb.getConnection(dbConfig);

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

          res.status(201).json({ message: 'User registered successfully' });
      }

      await connection.commit();
      await connection.close();
  } catch (err) {
      console.error('Server Error:', err);
      if (err.errorNum === 1) {
          res.status(400).json({ message: 'User already exists' });
      } else {
          res.status(500).json({ message: 'Server error', error: err.message });
      }
  }
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
