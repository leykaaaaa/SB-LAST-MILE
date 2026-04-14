// Access DOM Elements
const clickBtn = document.getElementById("clickBtn");
const textInput = document.getElementById("textInput");
const selectBox = document.getElementById("selectBox");
const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");

// Click Event
clickBtn.addEventListener("click", () => {
    output.innerHTML = "Button clicked!";
});

// Input Event
textInput.addEventListener("input", () => {
    output.innerHTML = "Typing: " + textInput.value;
});

// Change Event
selectBox.addEventListener("change", () => {
    output.innerHTML = "Selected: " + selectBox.value;
});

// Submit Event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    output.innerHTML = "Form submitted: " + nameInput.value;
});

// Keyup Event
textInput.addEventListener("keyup", (e) => {
    output.innerHTML = "Last key: " + e.key;
});

// Mouseover & Mouseout
clickBtn.addEventListener("mouseover", () => {
    output.innerHTML = "Mouse over button";
});

clickBtn.addEventListener("mouseout", () => {
    output.innerHTML = "Mouse left button";
});

// Focus & Blur
textInput.addEventListener("focus", () => {
    textInput.style.backgroundColor = "#e3f2fd";
});

textInput.addEventListener("blur", () => {
    textInput.style.backgroundColor = "white";
});