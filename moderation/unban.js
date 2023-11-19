module.exports = {
    name: 'unban',
    description: 'unbans a mentioned user from the current server',
    async execute(message, args) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.reply('You do not have permission to use this command.');
        }
        
        const userId = args[0];
        if (userId) {
            message.guild.members.unban(userId)
                .then(() => {
                    message.reply(`Successfully unbanned user with ID ${userId}`);
                })
                .catch(err => {
                    message.reply('I was unable to unban the user');
                    console.error(err);
                });
        } else {
            message.reply("You didn't provide the user ID to unban!");
        }

    }
  };
