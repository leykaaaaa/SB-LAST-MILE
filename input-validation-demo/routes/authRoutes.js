const express = require("express");
const router = express.Router();

const validateUser = require("../middleware/validationMiddleware");

// POST /api/register
router.post("/register", validateUser, (req, res) => {
  res.status(200).json({
    success: true,
    message: "User registered successfully",
    data: req.body
  });
});

module.exports = router;