const Discord = require("discord.js")

module.exports = {
    slash: new Discord.SlashCommandBuilder()
        .setName('modal')
        .setDescription('Modal gösterme örnegi'),
    execute: async (client, interaction) => {
        // https://discordjs.guide/interactions/modals.html#building-and-responding-with-modals

        const modal = new Discord.ModalBuilder()
            .setCustomId('modalId')
            .setTitle('Modal');

        const input = new Discord.TextInputBuilder()
            .setCustomId("input1")
            .setLabel("Adın nedir")
            .setStyle(Discord.TextInputStyle.Short)

        const inputparagraf = new Discord.TextInputBuilder()
            .setCustomId("input2")
            .setLabel("Hakkında bir kaç bilgi:")
            .setStyle(Discord.TextInputStyle.Paragraph)

        const kisa = new Discord.ActionRowBuilder().addComponents(input),
            paragraf = new Discord.ActionRowBuilder().addComponents(inputparagraf);

        modal.addComponents(kisa, paragraf)
        interaction.showModal(modal)
        // index.js:54
    }
}