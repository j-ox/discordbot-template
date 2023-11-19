module.exports = {
    name: 'ban',
    description: 'Bans a mentioned user from the current server',
    async execute(message, args) {
      if (!message.member.permissions.has('BAN_MEMBERS')) {
        return message.reply('You do not have permission to use this command.');
      }
      
      const user = message.mentions.users.first();
      if (!user) {
        return message.reply("You didn't mention the user to ban!");
      }
      
      const member = message.guild.members.resolve(user);
      if (!member) {
        return message.reply("That user isn't in this guild!");
      }
      
      try {
        await member.ban();
        message.reply(`Successfully banned ${user.tag}`);
      } catch (err) {
        message.reply('I was unable to ban the member');
        console.error(err);
      }
    }
  };