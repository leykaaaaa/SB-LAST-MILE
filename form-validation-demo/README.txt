````markdown id="fv01"
# Form Validation Demo (React)

## 📌 Overview
This project demonstrates how to implement form validation in React using:
- Controlled components
- useState hook
- Custom validation logic
- Dynamic error handling
- Conditional rendering

The form validates user input for Name, Email, and Password fields.

---

## 🚀 Project Setup

### 1. Create Project (Vite)
```bash
npm create vite@latest form-validation-demo
cd form-validation-demo
npm install
npm run dev
````

---

## 📂 Folder Structure

```text id="fv02"
form-validation-demo/
│
├── src/
│   ├── components/
│   │   └── Form.jsx
│   ├── App.jsx
│   └── main.jsx
```

---

## 🧩 Features Implemented

### ✅ Controlled Components

* All inputs are managed using `useState`
* Form values update dynamically

### ✅ Validation Logic

* Required field validation
* Email format validation using regex
* Password minimum length validation

### ✅ Error Handling

* Error messages displayed below each input
* Errors update dynamically as user interacts

### ✅ Success Feedback

* Success message shown after valid submission
* Form resets after submission

### ✅ Form Submission Control

* Prevents page reload using `event.preventDefault()`
* Submission only allowed when all validations pass

---

## 🧪 Validation Rules

| Field    | Rule                       |
| -------- | -------------------------- |
| Name     | Required                   |
| Email    | Must be valid email format |
| Password | Minimum 6 characters       |

---

## 🛠️ How to Run

```bash id="fv03"
npm run dev
```

Then open the local development URL in your browser.

---

## ✅ Validation Checklist

* [x] React app runs successfully
* [x] Inputs are controlled components
* [x] Required field validation works
* [x] Email format validation works
* [x] Password length validation works
* [x] Error messages display correctly
* [x] Success message appears on valid submit
* [x] Form resets after submission
* [x] No console errors

---

## 👩‍💻 Author

**ANGELICA TULAGAN**
BACHELOR OF SCIENCE INFORMATION TECHNOLOGY STUDENT

---

## 📌 Notes

This project is part of a lab activity focused on learning React form handling and validation techniques.

