const Discord = require("discord.js")

module.exports = {
    slash: new Discord.SlashCommandBuilder()
        .setName('buton')
        .setDescription('Buton örnegi'),
        // https://discordjs.guide/slash-commands/advanced-creation.html#adding-options
    execute: async (client, interaction) => {
        // https://discordjs.guide/message-components/buttons.html#building-buttons
        const button1 = new Discord.ButtonBuilder()
            .setCustomId('buton1')
            .setLabel('Bana Bas')
            .setEmoji({ name: "🤙" })
            .setStyle(Discord.ButtonStyle.Danger);
        const button2 = new Discord.ButtonBuilder()
            .setCustomId('buton2')
            .setLabel('Bana Basamazsın')
            .setDisabled(true)
            .setStyle(Discord.ButtonStyle.Secondary);
        const button3 = new Discord.ButtonBuilder()
            .setCustomId('buton3')
            .setLabel('Bana bas')
            .setStyle(Discord.ButtonStyle.Success);

        const row = new Discord.ActionRowBuilder()
            .addComponents(button1, button2, button3);
        let message = await interaction.reply({ content: "Butonlar:", components: [row] })
        const filter = (i) => i.user.id == interaction.user.id
        const collector = message.createMessageComponentCollector({ filter }); // https://discordjs.guide/message-components/interactions.html#component-collectors

        collector.on("collect", async (i) => {
            if (i.customId == "buton1") {
                return i.reply("🤙")
            }
            if (i.customId == "buton3") {
                return i.reply("❎")
            }
        })
    }
}