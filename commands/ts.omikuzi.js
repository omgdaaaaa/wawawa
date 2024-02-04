const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ts-omikuzi')
    .setDescription('たいせいおみくじを実行します'),

  //コマンド内容
  async execute(interaction) {
    const omikujiOptions = [
      'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 
      'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん',
      'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん',
      'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん',
      'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん', 'にしたん',
      'noisy girl','noisy girl','noisy girl','noisy girl','noisy girl',
      'しみずちひろ','しみずちひろ','しみずちひろ','しみずちひろ','しみずちひろ','しみずちひろ','しみずちひろ','しみずちひろ','しみずちひろ','しみずちひろ',
      'お母さん' 
     ]; 
    const randomIndex = Math.floor(Math.random() * omikujiOptions.length);
    const selectedResult = omikujiOptions[randomIndex];
    await interaction.reply(`${selectedResult}`);

  },
};