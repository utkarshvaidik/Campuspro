// Express backend server - सभी user roles के लिए login और secure API
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const setupSecurity = require("./security");
const { findUser, generateToken } = require("./users");

const app = express();
setupSecurity(app);

app.use(bodyParser.json());

// Login route (username/password से login)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = findUser(username);
  if (!user) return res.status(401).json({ message: "गलत यूज़रनेम या पासवर्ड" });
  const bcrypt = require("bcrypt");
  if (!bcrypt.compareSync(password, user.password))
    return res.status(401).json({ message: "गलत यूज़रनेम या पासवर्ड" });
  const token = generateToken(user);
  res.json({ token, role: user.role });
});

// डैशबोर्ड के लिए secure route (सिर्फ login user के लिए)
app.get("/api/dashboard", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  try {
    const data = jwt.verify(token, "supersecret");
    res.json({ message: `स्वागत है, ${data.role}` });
  } catch (err) {
    res.sendStatus(401);
  }
});

app.listen(4000, () => console.log("Backend API http://localhost:4000 पर चल रहा है"));
