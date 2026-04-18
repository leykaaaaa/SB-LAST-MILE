// =========================
// STEP 2: CONDITIONAL STATEMENTS
// =========================

let score = 85;

if (score >= 90) {
    console.log("Excellent! You got an A.");
} else if (score >= 75) {
    console.log("Good job! You passed with a B.");
} else if (score >= 60) {
    console.log("You passed with a C.");
} else {
    console.log("Failed. Try again.");
}


// =========================
// STEP 3: LOOPS
// =========================

// FOR LOOP EXAMPLE
console.log("\nFOR LOOP OUTPUT:");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// WHILE LOOP EXAMPLE
console.log("\nWHILE LOOP OUTPUT:");
let count = 1;

while (count <= 5) {
    console.log("While Count:", count);
    count++;
}


// =========================
// STEP 4: FUNCTIONS
// =========================

// Function 1: Add numbers
function add(a, b) {
    return a + b;
}

// Function 2: Greeting message
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript lab.`;
}

// Function calls
console.log("\nFUNCTION OUTPUT:");
console.log("Sum:", add(10, 5));
console.log(greet("Student"));