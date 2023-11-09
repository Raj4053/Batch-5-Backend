// Import necessary modules and libraries
require("express-async-errors");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const express = require("express");
const mongoose = require("mongoose");
const videos = require("./routes/videos");
const users = require("./routes/users");
const likes = require("./routes/likes");
const auth = require("./routes/auth");
const error = require("./middleware/error");
const app = express();

// Define the port for the server
const port = 3000;

// Define the MongoDB connection string
const connectionString =
  "mongodb+srv://youtubeclone:1234@cluster0.5ofd4si.mongodb.net/youtubeclone_19165044";

// Connect to MongoDB using Mongoose with specified options
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

// Parse JSON from the request body
app.use(express.json());

// Define routes for different resources
app.use("/api/videos", videos);
app.use("/api/users", users);
app.use("/api/likes", likes);
app.use("/api/auth", auth);

// Error handling middleware; should be placed last
app.use(error);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
