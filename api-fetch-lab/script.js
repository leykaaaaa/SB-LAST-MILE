// Select elements
const button = document.getElementById("fetchBtn");
const output = document.getElementById("output");

// Step 4.1: Add Event Listener
button.addEventListener("click", fetchUsers);

function fetchUsers() {

    // Step 5.3: Loading indicator
    output.innerHTML = "<p>Loading...</p>";

    // Step 4.2: Fetch Data from API
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            // Step 4.3: Convert to JSON
            return response.json();
        })
        .then(data => {
            output.innerHTML = ""; // clear previous content

            // Step 5.1: Dynamically Create Elements
            data.forEach(user => {
                const div = document.createElement("div");
                div.classList.add("user");

                div.innerHTML = `
                    <strong>${user.name}</strong><br>
                    Email: ${user.email}<br>
                    City: ${user.address.city}
                `;

                output.appendChild(div);
            });
        })
        // Step 5.2: Handle Errors
        .catch(error => {
            output.innerHTML = "<p>Error fetching data.</p>";
            console.error("Error:", error);
        });
}