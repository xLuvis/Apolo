module.exports = {
    name: "send",
    description: "Mengirim Pesan ke Channel",
    category: "Admin",
    adminOnly: true,

    run: async (client, message, args) => {
        let destination = message.mentions.channels.first();
        if (!destination) return message.channel.send("Please Input The Channel Target!");
        if (!message.member.permissionsIn(destination).has('SEND_MESSAGES')) return message.reply(`You don't have permission to send message in ${destination}`);
        if (!message.guild.me.permissionsIn(destination).has('SEND_MESSAGES')) return message.reply(`I don't have permission to send message in ${destination}`);
        let content = args.join(" ").slice(21);
        destination.send(content);
        message.reply(`Successfully Send The Message to ${destination}`)
    }
}