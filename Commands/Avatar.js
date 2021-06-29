const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Broadcast Someone's Avatar",
    aliases: ["pp", "picture", "profile"],
    run : async (client, message) => {
        let member = message.mentions.users.first() || message.author
        let avatar = member.displayAvatarURL({size:1024});

        const Message = new MessageEmbed()
        .setTitle(`${member.username}'s Profile Picture`)
        .setImage(avatar)
        .setColor("#00FFFF")

        message.channel.send(Message);
    }
}