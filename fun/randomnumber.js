module.exports = {
    name: 'rn',
    description: 'it will print a random number',
    execute(message, args) {

// Commands goes here you retard
  const randomNumber = Math.floor(Math.random() * 100);     
message.channel.send(`Random Number : ${randomNumber}` );
    
  }
};