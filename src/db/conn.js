// Import the Mongoose module for MongoDB interaction
const mongoose = require("mongoose");

// Define the MongoDB connection URL. Replace with your actual MongoDB URL.
const dbURL = "mongodb://127.0.0.1:27017/myPortfolioWebsite";

// Connect to the MongoDB database using Mongoose
mongoose.connect(dbURL)
.then(() => {
    // Connection successful
    console.log(`Database Connected Successfully!`);
})
.catch((error) => {
    // Connection error
    console.log(error);
});
