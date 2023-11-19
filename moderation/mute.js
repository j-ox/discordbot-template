/// Mute time def
function parseDuration(duration) {
    const regex = /^(\d+)(m|h|d)$/;
    const match = duration.match(regex);
  
    if (!match) return null;
  
    const amount = parseInt(match[1]);
    const unit = match[2];
  
    if (unit === 'm') return amount * 60000; // minutes to milliseconds
    if (unit === 'h') return amount * 3600000; // hours to milliseconds
    if (unit === 'd') return amount * 86400000; // days to milliseconds
  
    return null;
  }

  module.exports = {
    name: 'mute',
    description: 'mutes a mentioned user an X amount of time',
    async execute(message, args) {
   
        
  const target = message.mentions.members.first();
  if (!target) {
      message.reply('Please mention a user to mute.');
      return;
  }

  const duration = args[1];
  if (!duration) {
      message.reply('Please provide a valid duration (in minutes, hours, or days).');
      return;
  }

  const time = parseDuration(duration);
  if (!time) {
      message.reply('Please provide a valid duration (in minutes, hours, or days).');
      return;
  }

  const role = message.guild.roles.cache.find((r) => r.name === 'Muted');
  if (!role) {
      message.reply('The "Muted" role does not exist. Please create it first.');
      return;
  }

  target.roles.add(role);
  message.reply(`User ${target.user.tag} has been muted for ${duration}.`);

  setTimeout(() => {
      target.roles.remove(role);
      message.reply(`User ${target.user.tag} has been unmuted.`);
  }, time);
}

    };