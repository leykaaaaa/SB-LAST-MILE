
# 📘 State and Props Lab – React

## 📌 Overview

This project demonstrates the fundamental concepts of **state** and **props** in React. It showcases how to manage dynamic data using the `useState` hook and how to pass data between components using props.

A simple interactive application is built, including a counter, greeting messages, and shared state management between components.

---

## 🎯 Learning Objectives

By completing this lab, you will be able to:

* Understand the difference between **state** and **props**
* Use the `useState` hook to manage component state
* Pass data from parent to child components using props
* Update the UI dynamically based on state changes
* Create reusable and modular React components

---

## 🛠️ Technologies Used

* React (Functional Components)
* JavaScript (ES6+)
* HTML & CSS
* Node.js & npm

---

## 📁 Project Structure

```
state-props-lab/
│
├── src/
│   ├── App.js
│   ├── Counter.js
│   ├── Greeting.js
│   ├── Display.js
│   └── index.js
│
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone or Create Project

```bash
npx create-react-app state-props-lab
cd state-props-lab
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm start
```

Then open:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🚀 Features

### 🔹 Counter Component (State)

* Uses `useState` to manage count
* Increment and decrement buttons
* Updates UI dynamically

### 🔹 Greeting Component (Props)

* Receives `name` as a prop
* Displays personalized greeting messages

### 🔹 Display Component (Props)

* Shows shared counter value
* Updates in real-time

### 🔹 Lifting State Up

* State is managed in the parent component (`App.js`)
* Passed down to child components via props
* Demonstrates React data flow

---

## 🔄 Data Flow

```
App (Parent Component)
│
├── Greeting (receives name via props)
├── Counter (updates state via callback)
└── Display (receives updated state)
```

---

## 🧠 Key Concepts

### 📍 State

* Managed inside a component
* Can change over time
* Example: `count`

### 📍 Props

* Passed from parent to child
* Read-only
* Example: `name`, `label`, `value`

---

## ✅ Expected Output

* Displays:

  * Hello, Alice!
  * Hello, Bob!
* Counter:

  * Increment & Decrement functionality
* Display:

  * Updates when counter changes

---

## 🐞 Troubleshooting

| Issue                | Solution                                              |
| -------------------- | ----------------------------------------------------- |
| useState not defined | Import it: `import React, { useState } from 'react';` |
| Props not working    | Check prop names and usage                            |
| No UI update         | Use setter function (`setCount`)                      |
| App not running      | Restart with `npm start`                              |

---


## ✍️ Author

* ANGELICA TULAGAN

---

## 📌 Notes

This project is a foundational exercise for understanding React component communication and state management, which are essential for building modern web applications.

---

