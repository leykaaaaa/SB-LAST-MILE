// ===============================
// Step 1: Synchronous Execution
// ===============================
console.log("Step 1:");
console.log("A");
console.log("B");
console.log("C");

// ===============================
// Step 2: setTimeout (Macrotask)
// ===============================
console.log("\nStep 2:");
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// ===============================
// Step 3: Promise (Microtask)
// ===============================
console.log("\nStep 3:");
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// ===============================
// Step 4: Microtask vs Macrotask
// ===============================
console.log("\nStep 4:");
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// ===============================
// Step 5: Async/Await Flow
// ===============================
console.log("\nStep 5:");

async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
test();
console.log("4");

// ===============================
// Step 6: Advanced Flow Challenge
// ===============================
console.log("\nStep 6:");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");