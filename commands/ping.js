const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping値を表示します'),

  //コマンド内容
  async execute(interaction) {
    await interaction.reply(`WebSocket Ping: ${interaction.client.ws.ping}ms\nAPI Endpoint Ping: ...`);
    let msg = await interaction.fetchReply();
     await interaction.editReply(`WebSocket Ping: ${interaction.client.ws.ping}ms\nAPI Endpoint Ping: ${msg.createdTimestamp - interaction.createdTimestamp}ms`);

  },
};