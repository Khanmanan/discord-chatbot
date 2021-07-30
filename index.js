const Discord = require('discord.js');
const client = new Discord.Client();
require('discord-reply');
const cwk = require ("cwk-api");
const { readdirSync } = require("fs");
const { token , default_prefix } = require ("./config.json")
const db = require ("quick.db");
// handelr
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command", "events"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on('ready', () => {
client.user.setActivity("chatbot by cwkhan | YouTube.com/cwkhan")
  console.log(`Logged in as ${client.user.tag}!`);
});
// Chatbot event
client.on("message", async messag => {
  const cchann = db.get(`cwkchatbotch_${message.guild.id}`);
  if (cchann === null) return;
  if (!cchann) return;
  const sender = client.channels.cache.get(cchann);
  if (message.channel.name == sender.name) {
    if (message.author.bot) return;
    message.content = message.content
      .replace(/@(everyone)/gi, "everyone")
      .replace(/@(here)/gi, "here");
    message.channel.stopTyping();
    message.channel.startTyping();
    fetch(`https://api.snowflake107.repl.co/api/chatbot?message=${encodeURIComponent(message.content)}&name=automodbot`, {
      headers: {
        "Authorization": ""
      }
    })
      
      .then(res => res.json())
      .then(data => {
        message.lineReply(data.message);
      });
    message.channel.stopTyping();
  }
});
  }
});

// login into bot
client.login(token)
