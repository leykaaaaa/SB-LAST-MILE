const express = require("express");

const app = express();
const PORT = 3000;

// ===============================
// Step 4: Logger Middleware
// ===============================
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ===============================
// Step 2: Basic Routes
// ===============================

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to Route Handling!");
});

// About Route
app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
});

// ===============================
// Step 3: Dynamic Routing
// ===============================

// Route Parameter
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Viewing Product ID: ${id}`);
});

// Query String
app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`Searching for: ${query}`);
});

// ===============================
// Step 5: 404 Handler
// ===============================
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// ===============================
// Start Server
// ===============================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});