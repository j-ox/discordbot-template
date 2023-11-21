const { EmbedBuilder } = require('discord.js');


module.exports = {
  name: 'serverinfo',
  description: 'Server Information',
  async execute(message) {
    const guild = message.guild;
      const owner = await message.guild.fetchOwner()

    const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('Server Information')
    .setDescription(`Owner: ${owner}\n Server Name: ${guild.name}\n Total Members: ${guild.memberCount}\n Created at: ${guild.createdAt}\n`)
    .setTimestamp();
  
  message.channel.send({ embeds: [embed] });
  },
};