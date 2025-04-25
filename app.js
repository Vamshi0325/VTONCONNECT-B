const express = require("express");
const bot = require("./bot"); // Import the bot from bot.js

const app = express();

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

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
