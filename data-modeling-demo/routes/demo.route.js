const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Task = require("../models/task.model");


// CREATE USER
router.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// CREATE TASK
router.post("/task", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// GET USERS
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});


// GET TASKS + POPULATE USER
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find().populate("userId");
  res.json(tasks);
});

module.exports = router;