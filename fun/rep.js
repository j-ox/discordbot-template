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
    name: 'check',
    description: 'check someone rep',
    execute(message, args) {
      
        const user = message.mentions.members.first() || message.member;
 
        const userReputation = reputation[user.id]?.reputation || 0;
     
        message.reply(`${user} has ${userReputation} reputation points.`);


      }
    };