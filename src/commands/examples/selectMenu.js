const Discord = require("discord.js")

module.exports = {
    slash: new Discord.SlashCommandBuilder()
        .setName('select')
        .setDescription('selectMenu örnegi'),
    execute: async (client, interaction) => {
        // https://discordjs.guide/message-components/select-menus.html#sending-select-menus
        const select = new Discord.StringSelectMenuBuilder()
            .setCustomId('secim')
            .setPlaceholder('Bir secim yap!')
            .addOptions(
                new Discord.StringSelectMenuOptionBuilder()
                    .setLabel('Discord')
                    .setDefault(true)
                    .setDescription('Discord 🤙')
                    .setValue('discord'),
                new Discord.StringSelectMenuOptionBuilder()
                    .setLabel('Twitter (X)')
                    .setDescription('namı diğer X')
                    .setValue('twitter'),
                new Discord.StringSelectMenuOptionBuilder()
                    .setLabel('Instagram')
                    .setDescription('Threads diye bisi eklediler bune')
                    .setValue('instagram'),
            );

        const row = new Discord.ActionRowBuilder()
            .addComponents(select);

        let message = await interaction.reply({ content: 'Seçim yap', components: [row], });


        const filter = (i) => i.user.id == interaction.user.id
        const collector = message.createMessageComponentCollector({ filter }); // https://discordjs.guide/message-components/interactions.html#component-collectors

        collector.on("collect", async (i) => {
            if (i.customId == "secim") {
                i.reply(`${i.values[0]} seçildi`)
            }
        })
    }
}