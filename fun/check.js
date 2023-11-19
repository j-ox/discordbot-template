const fs = require('fs');
const REPUTATION_FILE = './reputation.json';
let reputation = {};
// Testing

// Load reputation data from file
if (fs.existsSync(REPUTATION_FILE)) {
const data = fs.readFileSync(REPUTATION_FILE, 'utf8');

if (data) {
  reputation = JSON.parse(data);
}
}


module.exports = {
    name: 'rep',
    description: 'rep someone',
    execute(message, args) {
      

        const recipient = message.mentions.members.first();
 
        if (!recipient) {
          message.reply('Please mention a user to give reputation points to.');
          return;
        }
     
        if (message.author.id === recipient.id) {
          message.reply("You can't give reputation points to yourself.");
          return;
        }
     
        const lastGiven = reputation[message.author.id]?.lastGiven || 0;
        const currentTime = Date.now();
     
        // Check if 24 hours have passed since the last given reputation
        if (currentTime - lastGiven < 24 * 60 * 60 * 1000) {
          message.reply("You can only give reputation points once every 24 hours.");
          return;
        }
     
        reputation[message.author.id] = {
          lastGiven: currentTime,
        };
     
        reputation[recipient.id] = {
          reputation: (reputation[recipient.id]?.reputation || 0) + 1,
        };
     
        fs.writeFileSync(REPUTATION_FILE, JSON.stringify(reputation));
     
        message.reply(`You have given 1 reputation point to ${recipient}.`);
      }
    };