const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sukoshidamare')
    .setDescription('少し黙れといいます'),

  //コマンド内容
  async execute(interaction) {
    await interaction.reply(`少し黙れ`);

  },
};