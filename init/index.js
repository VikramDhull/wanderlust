const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// Connect to the MongoDB database
main()
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust"); // Connect to the 'wanderlust' database
}

// Seed the database with sample data
const initDB = async () => {
  await Listing.deleteMany({}); // Delete all existing listings
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6859077717ecedad21e8fbaa",
  }));
  await Listing.insertMany(initData.data); // Insert sample listings from data.js
  console.log("data initiated successfully");
};

initDB(); // Call the function to seed the database
