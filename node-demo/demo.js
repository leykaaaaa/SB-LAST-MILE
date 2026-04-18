// Import File System module
const fs = require('fs');

// Define content
const message = "Hello! This file was created using Node.js File System module.";

// Write file
fs.writeFile('message.txt', message, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File successfully created!");
  }
});