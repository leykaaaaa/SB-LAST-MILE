const output = document.getElementById("output");

// Helper function to display results
function show(title, content) {
  const div = document.createElement("div");
  div.className = "box";

  div.innerHTML = `
    <h3>${title}</h3>
    <pre>${content}</pre>
  `;

  output.appendChild(div);
}

console.log("===== DESTRUCTURING LAB =====");

/* =========================
   STEP 2: ARRAY DESTRUCTURING
========================= */

const fruits = ["Apple", "Banana", "Mango"];
const [first, second, third] = fruits;

const numbers = [10, 20, 30, 40];
const [a, , c] = numbers;

console.log(first, second, third);
console.log(a, c);

show(
  "Array Destructuring",
  `
First: ${first}
Second: ${second}
Third: ${third}

Skip Example:
a = ${a}
c = ${c}
`
);

/* =========================
   STEP 3: OBJECT DESTRUCTURING
========================= */

const student = {
  name: "Yolly Jane",
  age: 18,
  course: "Civil Engineering"
};

const { name, age, course } = student;

console.log(name, age, course);

show(
  "Object Destructuring",
  `
Name: ${name}
Age: ${age}
Course: ${course}
`
);

/* =========================
   STEP 4: ADVANCED DESTRUCTURING
========================= */

// Renaming
const user = {
  username: "angelica123",
  email: "angelica@email.com"
};

const { username: userName, email: userEmail } = user;

// Default values
const product = {
  title: "Laptop"
};

const { title, price = 50000 } = product;

// Nested destructuring
const person = {
  info: {
    fullName: "Angelica Tulagan",
    address: {
      city: "Pangasinan"
    }
  }
};

const {
  info: {
    fullName,
    address: { city }
  }
} = person;

console.log(userName, userEmail);
console.log(title, price);
console.log(fullName, city);

show(
  "Advanced Destructuring",
  `
Renamed:
Username: ${userName}
Email: ${userEmail}

Default Value:
Title: ${title}
Price: ${price}

Nested:
Full Name: ${fullName}
City: ${city}
`
);

/* =========================
   STEP 5: DESTRUCTURING IN FUNCTIONS
========================= */

// Object destructuring in function
function displayStudent({ name, age }) {
  return `Name: ${name}, Age: ${age}`;
}

// Array destructuring in function
function sum([x, y]) {
  return x + y;
}

const studentInfo = displayStudent(student);
const sumResult = sum([5, 10]);

console.log(studentInfo);
console.log(sumResult);

show(
  "Destructuring in Functions",
  `
${studentInfo}
Sum Result: ${sumResult}
`
);

/* =========================
   BONUS: REST OPERATOR
========================= */

const colors = ["red", "blue", "green", "yellow"];
const [primary, ...others] = colors;

console.log(primary, others);

show(
  "Bonus: Rest Operator",
  `
Primary: ${primary}
Others: ${others.join(", ")}
`
);