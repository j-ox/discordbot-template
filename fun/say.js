module.exports = {
    name: 'say',
    description: 'I will say anything you tell me too.',
    execute(message, args) {
      
        const sayMessage = args.join(' ');
        message.channel.send(sayMessage);
      }
    };