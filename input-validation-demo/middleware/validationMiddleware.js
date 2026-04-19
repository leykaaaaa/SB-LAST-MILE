function validateUser(req, res, next) {
  const { name, email, password } = req.body;

  // Step 3.1: Required Fields
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, email, password) are required"
    });
  }

  // Step 3.2: Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  // Step 3.3: Password Validation
  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters long"
    });
  }

  // If all validations pass
  next();
}

module.exports = validateUser;