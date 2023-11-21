const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'roles',
    description: 'Displays all roles in the server',
    async execute(message) {
        const roles = message.guild.roles.cache.map(role => `<@&${role.id}>`).join(", ");

        const embed = new EmbedBuilder()
            .setDescription(`**Roles:** \n${roles}`)
            .setColor(getRandomColor());

        message.channel.send({  embeds: [embed] });
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