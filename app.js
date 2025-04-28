const express = require("express");
require("dotenv").config();

// Import the bot from bot.js
const bot = require("./bot"); // This will automatically initialize and launch the bot

// Initialize the Express app
const app = express();

// Route to check if the server is running
app.get("/", (req, res) => {
  res.send("Hey, this is my API running 🥳");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Route for bot status
app.get("/bot", (req, res) => {
  res.status(200).send("VTON Bot is connected and running successfully");
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
