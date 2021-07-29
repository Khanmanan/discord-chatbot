const fetch = require ("node-fetch");
const client = require ("../index.js")
module.exports.run = async (client, message) => {
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
        message.inlineReply(data.message);
      });
    message.channel.stopTyping();
  }
});
}
