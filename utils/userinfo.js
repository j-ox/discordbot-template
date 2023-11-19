const { EmbedBuilder } = require('discord.js');


module.exports = {
  name: 'userinfo',
  description: 'User information',
  execute(message, args) {
    const target = message.mentions.users.first() || message.author;
    const isBot = target.bot ? 'like me' : 'human';

    const joinedAt = target.createdAt.toDateString();
    const daysAgo = Math.round((Date.now() - target.createdAt) / (1000 * 60 * 60 * 24));

    const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setAuthor({
      name: target.username,
      iconURL: target.displayAvatarURL()
    })
    .addFields(
      { name: 'You are: ', value: isBot, inline: true },
      { name: 'Joined Discord', value: `${joinedAt} **( ${daysAgo} )** days ago`, inline: true }
    )
    .setTimestamp();
  
  message.channel.send({ embeds: [embed] });
  },
};