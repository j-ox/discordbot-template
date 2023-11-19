const {EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'rn',
    description: 'Prints a random number',
    execute(message, args) {
      const color = getRandomColor();
        const randomNumber = Math.floor(Math.random() * 100);
        
        const embed = new EmbedBuilder()
            .setTitle('Random Number')
            .setDescription(`Random Number: ${randomNumber}`)
            .setColor(color);
        
        message.channel.send({ content: '', embeds: [embed] });
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