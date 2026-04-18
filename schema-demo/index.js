// Import mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/schema-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Database Connected"))
.catch(err => console.error("Connection Error:", err));

// ----------------------------
// Step 3: Define Schema
// ----------------------------

// Create schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create model
const User = mongoose.model('User', userSchema);

// ----------------------------
// Step 4 & 5: Insert & Retrieve Data
// ----------------------------

async function runApp() {
  try {
    // Insert data
    const newUser = new User({
      name: "Yolly Jane",
      email: "yolly@example.com",
      age: 18
    });

    await newUser.save();
    console.log("Data inserted successfully!");

    // Retrieve data
    const users = await User.find();
    console.log("Fetched Data:");
    console.log(users);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    mongoose.connection.close();
  }
}

runApp();