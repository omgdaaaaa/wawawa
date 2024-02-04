const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });
client.commands = new Collection();

const http = require('http');
http.createServer(function(request, response)
{
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Bot is online!');
}).listen(3000);


// commandsフォルダから、.jsで終わるファイルのみを取得
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // 取得した.jsファイル内の情報から、コマンドと名前をListenner-botに対して設定
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`[WARNING]  ${filePath} のコマンドには、必要な "data" または "execute" プロパティがありません。`);
  }
}



client.on('messageCreate', message => {
    if (message.author.bot) {
        return;
    }

    if (message.content == 'manato') {
        message.channel.send('fuck');
      }else if (message.content == 'a') {
    message.channel.send('bcdefghijklmnopqrstuvwxyz');
      }else if (message.content == 'じゃんたま') {
    message.channel.send('https://game.mahjongsoul.com/');
      }else if (message.content == 'gf') {
    message.channel.send('https://godfield.net/');
      }else if (message.content == 'あほ') {
    message.channel.send('だってよ<@1069172188151812156>');
      }else if (message.content == 'たいせい') {
  　message.channel.send('にしたん?');
      }else if (message.content == '金') {
    message.channel.send('https://quizknock.com/wp-content/uploads/2017/05/5000tyoen.jpg');
      }else if (message.content == 'ほっけ') {
    message.channel.send('黙れ');
      }else if (message.content == '学校') {
    message.channel.send('教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育教育');
      }else if (message.content == '殺す') {
    message.channel.send('<@1056858958217879623>死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑死刑');
      }else if (message.content == 'タルコフ') {
    message.channel.send('やるぞ<@1088357991100710983>やるぞ<@1088357991100710983>やるぞ<@1088357991100710983>やるぞ<@1088357991100710983>やるぞ<@1088357991100710983>やるぞ<@1088357991100710983>');
      }else if (message.content == 'ルーレット') {
    message.channel.send('自分でやれ');
      }

})
  





// コマンドが送られてきた際の処理
client.on(Events.InteractionCreate, async interaction => {
  // コマンドでなかった場合は処理せずさよなら。
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  // 一致するコマンドがなかった場合
  if (!command) {
    console.error(` ${interaction.commandName} というコマンドは存在しません。`);
    return;
  }

  try {
    // コマンドを実行
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'コマンドを実行中にエラーが発生しました。', ephemeral: true });
  }
});

client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
  //ステータス設定
  client.user.setPresence({ activities: [{ name: `人生` }], status: "online" });

});

client.login(process.env.TOKEN);