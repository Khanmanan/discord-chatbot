const Discord = require('discord.js');
const client = new Discord.Client();
require('discord-reply');
const cwk = require ("cwk-api");
const { readdirSync } = require("fs");
const config = require ("./config.json")
// ready 
client.on('ready', () => {
client.user.setActivity("chatbot by cwkhan | YouTube.com/cwkhan')
  console.log(`Logged in as ${client.user.tag}!`);
});
// hnalder
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});
// chatbot event


client.on("message", async message => {
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
    fetch(
      `https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(
        message.content
      )}&botname=${client.user.username}&ownername=cwkhan`
    ) 
      .then(res => res.json())
      .then(data => {
        message.lineReply(data.message);
      });
    message.channel.stopTyping();
  }
});

// login into bot
client.login(config.token)
