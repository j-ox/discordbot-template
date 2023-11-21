require('dotenv').config();
const { Client, IntentsBitField, Collection} = require('discord.js');
const fs = require('fs');
const {prefix}  = require('./config.json');

const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });


 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
 

//Command Scanner
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  setTimeout(() => {
    message.delete().catch(console.error);
  }, 30000);
});


client.commands = new Collection();

//Dev
const devFiles = fs.readdirSync('./dev').filter(file => file.endsWith('.js'));
for (const file of devFiles) {
  const command = require(`./dev/${file}`);
  client.commands.set(command.name, command);
}

//Fun
const funFiles = fs.readdirSync('./fun').filter(file => file.endsWith('.js'));
for (const file of funFiles) {
  const command = require(`./fun/${file}`);
  client.commands.set(command.name, command);
}


//Utils
const utilsFiles = fs.readdirSync('./utils').filter(file => file.endsWith('.js'));
for (const file of utilsFiles) {
  const command = require(`./utils/${file}`);
  client.commands.set(command.name, command);
}

//Moderation 
const moderationFiles = fs.readdirSync('./moderation').filter(file => file.endsWith('.js'));
for (const file of moderationFiles) {
  const command = require(`./moderation/${file}`);
  client.commands.set(command.name, command);
}



client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
  
}
});


//Bug Report System
const { EmbedBuilder } = require('discord.js');

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'br') {
    const guildId = (process.env.GI);
    const channelId = (process.env.CI);

    const targetGuild = client.guilds.cache.get(guildId);
    if (!targetGuild) {
      return message.reply('Target guild not found. Please provide a valid guild ID.');
    }

    const targetChannel = targetGuild.channels.cache.get(channelId);
    if (!targetChannel) {
      return message.reply('Target channel not found. Please provide a valid channel ID.');
    }

    const messageContent = args.join(' ');
    const user = message.author;

    const bugEmbed = new EmbedBuilder()
      .setColor('#FF0000')
      .setAuthor({
        name: message.author.username,
        iconURL: user.displayAvatarURL()
      })
      .setDescription(`**Server:** ${message.guild.name}\n**Bug:** ${messageContent}`);
       await targetChannel.send({ embeds: [bugEmbed] });
       message.reply('Bug sent successfully!').then(msg => msg.delete({ timeout:10000 }));
  }
});

// TESTING 

// TESTING 

client.login(process.env.TOKEN);
