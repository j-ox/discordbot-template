module.exports = {
    name: 'uptime',
    description: 'How long has the bot been up',
    execute(message, args) {
      const uptime = getUptime();
  
      function getUptime() {
        const currentTime = new Date();
        const difference = currentTime - message.client.readyAt;
        const days = Math.floor(difference / 1000 / 60 / 60 / 24);
        const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(difference / 1000 / 60) % 60;
        const seconds = Math.floor(difference / 1000) % 60;
  
        return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
      }
  
      message.channel.send(`I have been up for ${uptime}`);
    }
  };