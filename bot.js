const { Telegraf } = require("telegraf");
require("dotenv").config();

// Initialize the Telegram bot
const botToken = process.env.BOT_TOKEN; // Get the bot token from environment variables
const bot = new Telegraf(botToken);

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

// Launch the bot and listen to messages
bot.launch().then(() => {
  console.log("Bot is running and listening to messages...");
});

// Export the bot for use in other files
module.exports = bot;
