const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
const { PREFIX } = require("./config.json");
const { readdirSync } = require("fs");
const { join } = require("path");

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity("Visual Studio Code");
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = readdirSync("./Commands/");

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.on("message", async (message) => {
    if (message.author.bot) return ;
    if (message.channel.type === "dm") return;
    if (message.content.startsWith(PREFIX)) {
        const args = message.content.slice(PREFIX.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (!client.commands.has(command)) return;
        try {
            client.commands.get(command).run(client, message, args);
        } catch (error) {
            console.error(error);
        };
    };
});