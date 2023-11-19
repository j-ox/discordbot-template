const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Calculates API and message latency',
    async execute(message) {
        try {
            const sentMessage = await message.channel.send('Calculating ping...');
            const apiLatency = Math.round(message.client.ws.ping);
            const messageLatency = sentMessage.createdTimestamp - message.createdTimestamp;
            const color = getRandomColor();
            
            const embed = new EmbedBuilder()
                .setDescription(`**Ping**\nAPI Latency: ${apiLatency}ms\nMessage Latency: ${messageLatency}ms`)
                .setColor(color);

            await sentMessage.edit({ content: '', embeds: [embed] });
        } catch (error) {
            console.error('Error editing message:', error);
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