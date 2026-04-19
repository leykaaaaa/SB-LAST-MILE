const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// =======================
// STEP 5: SECRET + USERS
// =======================
const SECRET_KEY = "mysecretkey";

const users = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "user", password: "user123", role: "user" }
];

// =======================
// STEP 4: BASIC SERVER
// =======================
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// =======================
// STEP 6: LOGIN ROUTE
// =======================
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// =======================
// STEP 7: AUTH MIDDLEWARE
// =======================
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  });
}

// =======================
// STEP 8.1: USER ROUTE
// =======================
app.get("/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Welcome User",
    user: req.user
  });
});

// =======================
// STEP 8.2: ADMIN ROUTE
// =======================
app.get("/admin", authenticateToken, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }

  res.json({
    message: "Welcome Admin"
  });
});