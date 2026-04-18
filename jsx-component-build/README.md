# 📘 React Lab: JSX Components and Props

## 📌 Project Overview

This project demonstrates the basics of **React development** using:

* Functional Components
* JSX
* Props (data passing between components)

The app displays a welcome message and reusable user cards.

---

## 🛠️ Technologies Used

* React (via Vite)
* JavaScript (ES6)
* HTML (JSX)

---

## 📂 Project Structure

```
my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── Welcome.jsx
│   ├── UserCard.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## ⚙️ Setup Instructions

### 1. Create Project using Vite

```bash
npm create vite@latest my-react-app
```

### 2. Navigate to Project Folder

```bash
cd my-react-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

---

## 🧩 Features Implemented

### ✅ 1. Functional Component

A simple `Welcome` component displaying:

```
Hello, Angelica
```

---

### ✅ 2. Reusable Component with Props

`UserCard` component accepts:

* `name`
* `email`

Example:

```jsx
<UserCard name="Angelica" email="angelica@gmail.com" />
```

---

## 💡 Code Highlights

### Welcome Component

```jsx
function Welcome() {
  return <h1>Hello, Ram</h1>;
}
```

---

### UserCard Component

```jsx
function UserCard({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
```

---

### App Component

```jsx
import Welcome from "./Welcome";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <Welcome />
      <UserCard name="Angelica" email="angelica@gmail.com" />
      <UserCard name="Steven" email="steven@gmail.com" />
    </div>
  );
}
```

---

## 📸 Expected Output

```
Hello, Angelica

Angelica
angelica@gmail.com

Steven
steven@egmail.com
```

---

## ⚠️ Common Errors

* ❌ Component not found
  ✔️ Check correct file path and filename

* ❌ Props not displaying
  ✔️ Ensure props are used correctly:

  ```jsx
  {name} {email}
  ```

* ❌ Blank page
  ✔️ Make sure the server is running:

  ```bash
  npm run dev
  ```

---

## 🚀 Conclusion

This lab demonstrates the fundamentals of:

* Creating React components
* Using JSX
* Passing and displaying props

These concepts are essential for building dynamic and reusable UI components in React.

---

## 👨‍💻 Author

ANGELICA TULAGAN
BACHELOR OF SCIENCE INFORMATION TECHNOLOGY
