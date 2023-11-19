const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'uptime',
    description: 'How long has the bot been up',
    execute(message, args) {
        const uptime = getUptime();
        const color = getRandomColor();
    
        function getUptime() {
            const currentTime = new Date();
            const difference = currentTime - message.client.readyAt;
            const days = Math.floor(difference / 1000 / 60 / 60 / 24);
            const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
            const minutes = Math.floor(difference / 1000 / 60) % 60;
            const seconds = Math.floor(difference / 1000) % 60;
        
    
            return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
        }

        const embed = new EmbedBuilder()
            .setTitle('Uptime')
            .setDescription(`I have been up for ${uptime}`)
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