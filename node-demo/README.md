# Node.js File System Demo

## 📌 Overview

This project demonstrates basic file handling in Node.js using the built-in File System (fs) module. It creates a text file and writes content into it.

---

## 🚀 Features

* Write a file using Node.js
* Use of fs module
* Error handling for file operations

---

## 🛠️ Technologies Used

* Node.js
* JavaScript

---

## 📂 Project Structure

node-demo/
│
├── demo.js
├── message.txt

---

## ⚙️ Installation & Setup

1. Make sure Node.js is installed:
   node -v

2. Clone or download the project

3. Navigate to project folder:
   cd node-demo

4. Run the script:
   node demo.js

---

## 📜 Code Explanation

### Import Module

const fs = require('fs');

### Define Content

const message = "Hello! This file was created using Node.js.";

### Write File

fs.writeFile('message.txt', message, (err) => {
if (err) throw err;
console.log("File created!");
});

---

## ✅ Expected Output

* A file named message.txt is created
* The file contains the specified text
* Terminal shows success message

---

## 🧪 Experimentation

You can modify the message content and rerun the script to update the file.

---

## 👩‍💻 Author

ANGELICA TULAGAN
BACHELOR OF SCIENCE INFORMATION TECHNOLOGY
---

## 📌 Notes

This project is for educational purposes and demonstrates basic Node.js file operations.
