const mongoose = require("mongoose");

// 1. MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/aggregationDB", {
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.log("❌ Connection Error:", err));

//
const salesSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  quantity: Number
});

const Sales = mongoose.model("Sales", salesSchema);

//
async function seedData() {
  await Sales.deleteMany(); // clear old data

  await Sales.insertMany([
    { productName: "Laptop", category: "Electronics", price: 50000, quantity: 2 },
    { productName: "Phone", category: "Electronics", price: 20000, quantity: 5 },
    { productName: "Shoes", category: "Fashion", price: 3000, quantity: 10 },
    { productName: "T-Shirt", category: "Fashion", price: 500, quantity: 20 },
    { productName: "Headphones", category: "Electronics", price: 1500, quantity: 15 },
    { productName: "Bag", category: "Accessories", price: 1200, quantity: 8 }
  ]);

  console.log("📦 Sample Data Inserted");
}

async function matchStage() {
  const result = await Sales.aggregate([
    { $match: { category: "Electronics" } }
  ]);

  console.log("🔎 MATCH RESULT:");
  console.log(result);
}

async function matchStage() {
  const result = await Sales.aggregate([
    { $match: { category: "Electronics" } }
  ]);

  console.log("🔎 MATCH RESULT:");
  console.log(result);
}

async function groupStage() {
  const result = await Sales.aggregate([
    {
      $group: {
        _id: "$category",
        totalProducts: { $sum: 1 },
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
      }
    }
  ]);

  console.log("📊 GROUP RESULT:");
  console.log(result);
}

async function projectStage() {
  const result = await Sales.aggregate([
    {
      $project: {
        productName: 1,
        category: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] }
      }
    }
  ]);

  console.log("🧾 PROJECT RESULT:");
  console.log(result);
}

async function sortStage() {
  const result = await Sales.aggregate([
    {
      $project: {
        productName: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] }
      }
    },
    { $sort: { totalAmount: -1 } }
  ]);

  console.log("📉 SORTED RESULT:");
  console.log(result);
}

async function fullPipeline() {
  const result = await Sales.aggregate([
    // Filter only Electronics
    { $match: { category: "Electronics" } },

    // Compute revenue
    {
      $project: {
        productName: 1,
        category: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] }
      }
    },

    // Sort by revenue
    { $sort: { totalAmount: -1 } }
  ]);

  console.log("🚀 FULL PIPELINE RESULT:");
  console.log(result);
}

mongoose.connection.once("open", async () => {
  await seedData();

  await matchStage();
  await groupStage();
  await projectStage();
  await sortStage();

  await fullPipeline();

  mongoose.connection.close();
});