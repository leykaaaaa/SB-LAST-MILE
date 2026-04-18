# React Hooks Lab

## 📌 Overview

This project demonstrates the use of React Hooks, specifically:

* useState
* useEffect

The application is a simple counter that updates state and logs changes using side effects.

---

## 🚀 Features

* Counter functionality (Increase, Decrease, Reset)
* State management using useState
* Side effects using useEffect
* Simple and clean UI

---

## 🛠️ Technologies Used

* React (Vite)
* JavaScript (ES6)
* CSS

---

## 📂 Project Structure

react-hooks-lab/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
├── package.json
├── index.html

---

## ⚙️ Installation & Setup

1. Clone the repository or download the project

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

4. Open browser:
   http://localhost:5173/

---

## 🧠 Concepts Applied

### useState

Used to manage the counter state:
const [count, setCount] = useState(0);

### useEffect

Used to log changes whenever count updates:
useEffect(() => {
console.log("Count changed:", count);
}, [count]);

---

## ✅ Expected Output

* Counter updates when buttons are clicked
* Console logs display state changes
* Clean and responsive UI

---

## 👩‍💻 Author

ANGELICA TULAGAN
BACHELOR OF SCIENCE INFORMATION TECHNOLOGY
---

## 📌 Notes

This project is for educational purposes and demonstrates basic React Hooks usage.
