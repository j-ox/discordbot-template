const customCommands = {
    hello: 'Hello, there!',
    invite: 'https://discord.com/api/oauth2/authorize?client_id=1165695987667439679&permissions=70368744177655&scope=bot',
    botsupport: 'This is where I live. https://discord.gg/4UjS3Bk6e2',
    // Add more custom commands here
  };
  
  module.exports = {
    name: 'c',
    description: 'List of commands',
    execute(message, args) {
      const command = args[0];
  
      if (!command) {
        // Send the list of available commands
        const commandsList = Object.keys(customCommands).join(', ');
        message.channel.send(`Available custom commands: ${commandsList}`);
      } else if (command in customCommands) {
        // Execute the custom command if it exists
        message.channel.send(customCommands[command]);
      } else {
        // Create a new custom command
        const commandResponse = args.slice(1).join(' ');
  
        customCommands[command] = commandResponse;
  
        message.channel.send(`Custom command "${command}" created successfully!`);
      }
    },
  };