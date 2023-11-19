const fs = require('fs');

module.exports = {
    name: 'help',
    description: 'List of commands',
    execute(message, args) {
        try {
            const data = fs.readFileSync('./help.txt', 'utf8');
            message.author.send(`I can do:\n${data}`);
        } catch (err) {
            console.error(err);
        }
    }
};