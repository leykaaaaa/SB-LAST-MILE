// ===============================
// Step 2: Implement Arrays
// ===============================

// Subtask 2.1 Create Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "mango"];
let mixed = [10, "hello", true];

// Display arrays
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Mixed:", mixed);

// Subtask 2.2 Use Array Methods
numbers.push(6); // add at end
console.log("After push:", numbers);

numbers.pop(); // remove last
console.log("After pop:", numbers);

numbers.shift(); // remove first
console.log("After shift:", numbers);

numbers.unshift(0); // add at beginning
console.log("After unshift:", numbers);

console.log("Length of numbers:", numbers.length);

// ===============================
// Step 3: Implement Objects
// ===============================

// Subtask 3.1 Create Objects
let student = {
    name: "Angelica",
    age: 19,
    course: "BSIT"
};

console.log("Student Object:", student);

// Subtask 3.2 Access Object Properties
// Dot notation
console.log("Name:", student.name);

// Bracket notation
console.log("Age:", student["age"]);

// Modify properties
student.age = 19;
student["course"] = "Information Technology";

console.log("Updated Student:", student);

// ===============================
// Step 4: Use Built-in Methods
// ===============================

// Subtask 4.1 Apply Array Processing Methods

let nums = [1, 2, 3, 4, 5];

// map (double values)
let doubled = nums.map(n => n * 2);
console.log("Doubled:", doubled);

// filter (only even numbers)
let evens = nums.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// forEach (print each value)
nums.forEach(n => {
    console.log("Value:", n);
});

// Subtask 4.2 Combine Objects and Arrays

let students = [
    { name: "Yolly", age: 18 },
    { name: "Anna", age: 20 },
    { name: "Mark", age: 17 }
];

// Display all students
console.log("Students List:", students);

// Filter students above 18
let adults = students.filter(s => s.age >= 18);
console.log("Adult Students:", adults);

// Add new student
students.push({ name: "John", age: 21 });
console.log("Updated Students:", students);

// ===============================
// Step 5: Testing and Validation
// ===============================

console.log("All array and object operations executed successfully!");