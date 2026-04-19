
# 📘 MERN Student Management App

## 📌 Project Overview

This project is a simple full-stack application built using the **MERN stack** (MongoDB, Express, React, Node.js). It demonstrates how data flows from the frontend to the backend, gets stored in a database, and is retrieved and displayed in the user interface.

The application allows users to:

* Add student information
* Store data in MongoDB
* Retrieve and display stored data in real time

---

## 🛠️ Technologies Used

### Frontend:

* React.js
* Axios
* HTML & CSS

### Backend:

* Node.js
* Express.js
* Mongoose
* CORS

### Database:

* MongoDB

---

## 📁 Project Structure

```
project-root/
│
├── backend/
│   ├── models/
│   │     └── Student.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── App.js
    │   ├── StudentForm.js
    │   └── index.js
    └── package.json
```

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

1. Navigate to backend folder:

```
cd backend
```

2. Initialize project:

```
npm init -y
```

3. Install dependencies:

```
npm install express mongoose cors
```

4. Run server:

```
node server.js
```

✔ Server runs on: `http://localhost:5000`

---

### 🔹 Frontend Setup

1. Navigate to frontend folder:

```
cd frontend
```

2. Install dependencies:

```
npm install
npm install axios
```

3. Run React app:

```
npm start
```

✔ App runs on: `http://localhost:3000`

---

## 🔄 Application Flow

1. User enters student name and course in the form
2. React sends POST request to Express backend
3. Backend saves data to MongoDB
4. React fetches data using GET request
5. Data is displayed on the UI

---

## ✅ Features Implemented

* Create Student (POST API)
* Fetch Students (GET API)
* React Form with useState
* Data fetching using useEffect
* Real-time UI update after submission
* MongoDB data persistence

---

## ⚠️ Challenges Encountered

* **CORS Error**
  Fixed by enabling CORS middleware in Express.

* **MongoDB Connection Issue**
  Ensured MongoDB is running and correct connection string is used.

* **State Not Updating**
  Resolved by calling fetch function after POST request.

---

## 🧪 Testing

✔ Enter data in form
✔ Submit form
✔ Data saved in MongoDB
✔ Data fetched and displayed
✔ No errors in console

---

## 📌 Conclusion

This project successfully demonstrates a complete data flow in a MERN stack application. It shows how frontend and backend systems interact with a database to perform CRUD operations efficiently.

---
