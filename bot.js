const { Telegraf } = require("telegraf");
require("dotenv").config();

// Initialize your bot
const botToken = process.env.BOT_TOKEN; // Make sure to set this as an environment variable
const bot = new Telegraf(botToken);

// Start command to show a simple button (your bot functionality)
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

module.exports = bot; // Export bot in case you need it elsewhere
