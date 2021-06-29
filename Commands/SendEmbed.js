const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "sendembed",
    description: "Mengirim Pesan ke Channel Menggunakan Embed",
    category: "Admin",
    adminOnly: true,

    run: async (client, message, args) => {
        let destination = message.mentions.channels.first();
        if (!destination) return message.channel.send("Please Input The Channel Target!");
        if (!message.member.permissionsIn(destination).has('SEND_MESSAGES')) return message.reply(`You don't have permission to send message in ${destination}`);
        if (!message.guild.me.permissionsIn(destination).has('SEND_MESSAGES')) return message.reply(`I don't have permission to send message in ${destination}`);
        let content = args.join(" ").slice(21);
        
        const Embed = new MessageEmbed()
        .setColor("#66CDAA")
        .setDescription(content)
        .setTimestamp()

        destination.send(Embed)

        message.reply(`Successfully Send The Message to ${destination}`)
    }
}