require('dotenv').config();
const { Client, IntentsBitField, Collection } = require('discord.js');
const fs = require('fs');
const prefix = '.';

const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });

client.commands = new Collection();

//Fun
const commandFiles = fs.readdirSync('./fun').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./fun/${file}`);
  client.commands.set(command.name, command);
}

//Moderation 
const moderationFiles = fs.readdirSync('./moderation').filter(file => file.endsWith('.js'));
for (const file of moderationFiles) {
  const command = require(`./moderation/${file}`);
  client.commands.set(command.name, command);
}

//Costume Commands
const costumecommandsFiles = fs.readdirSync('./costumecommands').filter(file => file.endsWith('.js'));
for (const file of costumecommandsFiles) {
  const command = require(`./costumecommands/${file}`);
  client.commands.set(command.name, command);
}

//Dev
const devFiles = fs.readdirSync('./dev').filter(file => file.endsWith('.js'));
for (const file of devFiles) {
  const command = require(`./dev/${file}`);
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



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    startTime = new Date();
  });

  client.login(process.env.TOKEN);
