const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'serverinfo',
  description: 'Server Information',
  async execute(message) {
    const guild = message.guild;
    const owner = await message.guild.fetchOwner();

    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('Server Information')
      .setDescription(`Owner: ${owner}\nServer Name: ${guild.name}\nTotal Members: ${guild.memberCount}\nCreated at: ${guild.createdAt}\n`)
      .setThumbnail(guild.iconURL()) // Add this line to set the server picture as a thumbnail
      .setTimestamp();
  
    message.channel.send({ embeds: [embed] });
  },
};