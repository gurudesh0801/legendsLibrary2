const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://legends-library.vercel.app/', // replace with your Vercel app domain
  methods: '*',
}));

// Database connection
mongoose
  .connect("mongodb://localhost:27017/legendslibrary", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// User schema
let memberId = 0;
const userSchema = new mongoose.Schema({
  memberId: Number,
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
});

// User model
const User = mongoose.model("User", userSchema);

// Routes
app.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Check for existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("User with this email already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    memberId : memberId +1,
    name,
    email,
    phone,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
