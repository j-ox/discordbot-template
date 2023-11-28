const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'say',
  description: 'I will say anything you tell me to.',
  execute(message, args) {
    const text = args.join(' ');
    let sendAsEmbed = false;

    if (args.includes('-')) {
      sendAsEmbed = true;
      args.splice(args.indexOf('-'), 1);
    }

    if (sendAsEmbed) {
      const embed = new EmbedBuilder()
        .setColor(getRandomColor())
        .setDescription(text);

      message.channel.send({ embeds: [embed] });
    } else {
      message.channel.send(text);
    }
  }
};




function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}