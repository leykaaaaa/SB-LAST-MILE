// ===============================
// Step 2: Convert var → let/const
// ===============================

const name = "Angelica"; // constant value
let age = 18; // can change

age = 19;

console.log("Name:", name);
console.log("Age:", age);

// ===============================
// Step 3: Arrow Functions
// ===============================

// ES5 Function
// function greet(name) {
//     return "Hello " + name;
// }

// ES6 Arrow Function
const greet = (name) => {
    return `Hello ${name}`;
};

console.log(greet("Angelica"));

// ===============================
// Step 4: Template Literals
// ===============================

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// ===============================
// Step 5: Modern ES6 Features
// ===============================

// 🔹 Destructuring
const student = {
    studentName: "Angelica",
    course: "BSIT"
};

const { studentName, course } = student;
console.log(`Student: ${studentName}, Course: ${course}`);

// 🔹 Spread Operator
const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5];
console.log("Combined Array:", numbers2);

// 🔹 Default Parameters
const multiply = (a = 1, b = 1) => {
    return a * b;
};

console.log("Multiply:", multiply(5, 2));
console.log("Default Multiply:", multiply());

// ===============================
// Final Output Check
// ===============================
console.log("ES6 Features applied successfully!");