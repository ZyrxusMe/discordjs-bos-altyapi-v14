const Discord = require("discord.js")

module.exports = {
    slash: new Discord.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong'),
        // https://discordjs.guide/slash-commands/advanced-creation.html#adding-options
    execute: async (client, interaction) => {
        interaction.reply(`🏓 Pong! ${Date.now() - interaction.createdTimestamp}ms`)
    }
}