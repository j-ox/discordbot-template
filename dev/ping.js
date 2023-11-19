module.exports = {
    name: 'ping',
    description: 'Calculates API and message latency',
    execute(message, args) {
      message.channel.send('Calculating ping...').then(sentMessage => {
        const apiLatency = Math.round(message.client.ws.ping);
        const messageLatency = sentMessage.createdTimestamp - message.createdTimestamp;
  
        sentMessage.edit(`**API Latency:** ${apiLatency}ms\n**Message Latency:** ${messageLatency}ms`);
      });
    }
  };