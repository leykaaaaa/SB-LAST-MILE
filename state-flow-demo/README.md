# React State Flow Demo

## 📌 Project Overview

This project demonstrates how state flows in a React application using functional components, props, and callback functions.

It shows:

* Parent-to-child data passing
* Child-to-parent communication
* Shared state across components
* Basic event handling and debugging

---

## ⚙️ Technologies Used

* React (Vite)
* JavaScript (ES6)
* HTML & CSS (inline styling)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Parent.jsx
│   ├── Child.jsx
│   └── Display.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🚀 How to Run the Project

1. Install dependencies:

```
npm install
```

2. Start development server:

```
npm run dev
```

3. Open in browser:

```
http://localhost:5173
```

---

## 🔄 State Flow Explanation

### 1. Parent Component

* Holds the main state (`message`)
* Uses `useState` hook

### 2. Parent → Child

* State is passed as props (`message`)

### 3. Child → Parent

* Callback function (`updateMessage`) is passed
* Triggered using button click

### 4. Shared State

* Multiple child components use the same state
* Updates reflect across all components

### 5. Display Component

* Receives state via props
* Only used for displaying data

---

## 🧪 Features Demonstrated

* useState hook
* Props passing
* Event handling
* Callback functions
* Component communication

---

## 🐞 Debugging

* Console logs used to track state changes
* React DevTools can be used for inspection

---

## ⚠️ Prop Drilling

Prop drilling happens when data is passed through many layers of components.

### Problem:

* Hard to manage
* Reduces readability

### Solutions:

* Context API
* State management libraries (Redux)

---

## ✅ Conclusion

This project successfully demonstrates how React components communicate and share state efficiently using props and callbacks.

---

## 👩‍💻 Author

ANGELICA TULAGAN
