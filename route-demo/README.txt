
## 📄 `README.md`

```markdown id="rdreadme01"
# Route Handling Demo (Express.js)

## 📌 Overview
This project demonstrates basic route handling in Node.js using Express. It covers:
- Creating a simple server
- Defining static and dynamic routes
- Handling query parameters
- Using middleware
- Implementing a 404 (Not Found) handler

---

## 🎯 Learning Objectives
After completing this lab, I was able to:
- Set up an Express server
- Create GET routes
- Handle route parameters and query strings
- Use middleware for logging
- Implement a catch-all 404 route

---

## 🧱 Project Structure

```

route-demo/
│
├── server.js
├── package.json
└── README.md

````

---

## ⚙️ Setup Instructions

### 1. Initialize Project
```bash
npm init -y
````

### 2. Install Dependencies

```bash
npm install express
```

### 3. Run Server

```bash
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

## 🌐 Available Routes

### 🏠 Home Route

```
GET /
```

Response:

```
Welcome to Route Handling!
```

---

### ℹ️ About Route

```
GET /about
```

Response:

```html
<h1>About Us</h1>
```

---

### 📦 Dynamic Route (Route Parameters)

```
GET /products/:id
```

Example:

```
/products/101
```

Response:

```
Viewing Product ID: 101
```

---

### 🔍 Query Route (Search)

```
GET /search?q=keyword
```

Example:

```
/search?q=laptop
```

Response:

```
Searching for: laptop
```

---

### ❌ 404 Route

Any undefined route:

```
Page Not Found
```

---

## 🧠 Key Concepts

* **Routing**: Handling different URL paths
* **Route Parameters**: Dynamic values in URL (`:id`)
* **Query Strings**: Data passed after `?`
* **Middleware**: Functions executed during request lifecycle
* **404 Handling**: Catch-all route for undefined paths

---

## 🧪 Sample Output

```
GET / → Welcome to Route Handling!
GET /about → <h1>About Us</h1>
GET /products/5 → Viewing Product ID: 5
GET /search?q=phone → Searching for: phone
```

---

## ⚠️ Challenges Encountered

* Understanding difference between params and query
* Middleware execution order
* Handling undefined routes properly

---

## ✅ Validation Checklist

* [x] Server runs successfully
* [x] Basic routes working
* [x] Dynamic routing implemented
* [x] Query parameters handled
* [x] Middleware logs requests
* [x] 404 route implemented
* [x] No runtime errors

---

## 👩‍💻 Author

**ANGELICA TULAGAN**
BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY STUDENT

---

## 📌 Notes

This project is part of a lab activity focused on understanding backend routing using Express.js.

---

## 🚀 Future Improvements

* Add POST and PUT routes
* Connect to a database
* Use Express Router for modular routing
* Add error-handling middleware

