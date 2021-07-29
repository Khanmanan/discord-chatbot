const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "chatbot-dsable",
  category: "moderation",
  usage: "chatbot disable",
  description: " disable chatbot channel",
  run: (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("😐 you need permission to ADMINISTRATION ");
    }
    db.delete(`cwkchatbotch_${message.guild.id}`, channel.id)
    
    message.channel.send(`chatbot Channel is disable`)
  }
}
