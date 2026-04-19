const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const CustomError = require("./utils/customError");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/success", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Request successful!"
  });
});

app.get("/error", (req, res, next) => {
  const error = new CustomError("This is a forced error!", 500);
  next(error);
});

app.get("/crash", (req, res, next) => {
  try {
    let result = undefinedVariable;
    res.send(result);
  } catch (err) {
    next(err);
  }
});

// 404 Handler
app.use((req, res, next) => {
  const err = new CustomError("Route not found", 404);
  next(err);
});

// Error Middleware
app.use(errorHandler);

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});