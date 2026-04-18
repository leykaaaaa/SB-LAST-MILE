// ===============================
// Step 1: Identify Inefficient Code
// ===============================

// Original (Inefficient)
function getEvenNumbersOld(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log("Old Even Numbers:", getEvenNumbersOld([1,2,3,4,5,6]));

// ===============================
// Step 2: Refactor Using ES6
// ===============================

// Optimized using filter()
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log("Optimized Even Numbers:", getEvenNumbers([1,2,3,4,5,6]));

// ===============================
// Step 3: DOM Optimization Example
// ===============================

// Inefficient Version (for reference)
/*
const list = document.getElementById("list");

for (let i = 0; i < 100; i++) {
  list.innerHTML += "<li>Item " + i + "</li>";
}
*/

// Optimized Version
function renderList() {
  const list = document.getElementById("list");
  let items = "";

  for (let i = 0; i < 100; i++) {
    items += `<li>Item ${i}</li>`;
  }

  list.innerHTML = items;
}

// ===============================
// Step 4: Optimize Nested Loop
// ===============================

// Inefficient O(n²)
function findDuplicatesOld(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

console.log("Old Duplicates:", findDuplicatesOld([1,2,3,2,4,5,1]));

// Optimized using Set
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  arr.forEach(item => {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  });

  return [...duplicates];
}

console.log("Optimized Duplicates:", findDuplicates([1,2,3,2,4,5,1]));