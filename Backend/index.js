const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const connection = require("./db");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sign-up endpoint
app.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(400).send({ message: "All fields are required." });
  }

  try {
    const [existingUser] = await connection
      .promise()
      .query("SELECT * FROM signup WHERE email = ? OR phone = ?", [
        email,
        phone,
      ]);

    if (existingUser.length > 0) {
      return res.status(400).send({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await connection
      .promise()
      .query(
        "INSERT INTO signup (name, email, phone, password) VALUES (?, ?, ?, ?)",
        [name, email, phone, hashedPassword]
      );

    res.status(201).send({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).send({ message: "Internal server error." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
