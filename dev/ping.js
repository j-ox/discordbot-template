const {EmbedBuilder} = require('discord.js');
module.exports = {
    name: 'ping',
    description: 'Calculates API and message latency',
    execute(message, args) {
      message.channel.send('Calculating ping...').then(sentMessage => {
        const apiLatency = Math.round(message.client.ws.ping);
        const messageLatency = sentMessage.createdTimestamp - message.createdTimestamp;
        const embed = new EmbedBuilder()
        .setDescription(`**Ping\n** API Latency , ${apiLatency}ms\nMessage Latency, ${messageLatency}ms`)
        .setColor('#00ff00');
  
      sentMessage.edit({ content: '', embeds: [embed] })
        .catch((error) => {
          console.error('Error editing message:', error);
        });
       
      });
    }
  };


