
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'emojis',
    description: 'Displays all emojis on a server',
    async execute(message) {
        let emojiList = message.guild.emojis.cache.map((e) => e.toString()).join(' ');
        if (!emojiList) {
            message.channel.send('There are no emojis available on this server.');
          } else {
            const embed = new EmbedBuilder()
            .setDescription(`**Emojis:** \n${emojiList}`)
            .setColor(getRandomColor());
            message.channel.send({  embeds: [embed] });
          }

       
    }
};


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}