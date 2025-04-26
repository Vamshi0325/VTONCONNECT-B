const express = require("express");
const { Telegraf } = require("telegraf");
require("dotenv").config();

// Initialize Express app
const app = express();

// Initialize the Telegram bot
const botToken = process.env.BOT_TOKEN; // Get the bot token from environment variables
const bot = new Telegraf(botToken);

// Express route to check if the server is running
app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Route for bot status
app.get("/bot", (req, res) => {
  res.status(200).send("VTON Bot is connected and running successfully");
});

// Start command for the Telegram bot to show a simple button
bot.start((ctx) => {
  ctx.reply("Welcome! Click the button below:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open App",
            web_app: {
              url: process.env.WEB_APP_URL,
            },
          },
        ],
      ],
    },
  });
});

// Start polling to listen to Telegram messages
bot.launch().then(() => {
  console.log("Bot is running and listening to messages...");
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
