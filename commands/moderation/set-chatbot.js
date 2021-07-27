const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "chatbot-set",
  category: "moderation",
  usage: "chatbot-set <#channel>",
  description: "Set the chatbot channel",
  run: (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("😐 you need permission to ADMINISTRATION ");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
   
db.set(`cwkchatbotch_${message.guild.id}`, channel.id)
    
    message.channel.send(`chatbot Channel is seted as ${channel}`)
  }
}
