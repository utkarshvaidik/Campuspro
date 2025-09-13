// Demo users (role के हिसाब से) और JWT token function
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = [
  {
    id: 1,
    username: "principal",
    password: bcrypt.hashSync("principal123", 10),
    role: "principal",
  },
  {
    id: 2,
    username: "teacher",
    password: bcrypt.hashSync("teacher123", 10),
    role: "teacher",
  },
  {
    id: 3,
    username: "clerk",
    password: bcrypt.hashSync("clerk123", 10),
    role: "clerk",
  },
  {
    id: 4,
    username: "student",
    password: bcrypt.hashSync("student123", 10),
    role: "student",
  },
];

function findUser(username) {
  return users.find((u) => u.username === username);
}

function generateToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    "supersecret",
    { expiresIn: "2h" }
  );
}

module.exports = { users, findUser, generateToken };