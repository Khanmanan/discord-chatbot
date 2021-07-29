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
// login into bot
client.login(token)
