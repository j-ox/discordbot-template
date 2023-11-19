module.exports = {
    name: 'math',
    description: 'Solve simple math problems',
    execute(message, args) {
     
        const problem = args.join(' ');

        try {
            const result = eval(problem); 
            message.reply(`The result of ${problem} is ${result}`);
        } catch (error) {
            message.reply('Invalid math problem.');
        }
    }

    };