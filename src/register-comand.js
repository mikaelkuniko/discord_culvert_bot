const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');
require('dotenv').config();

// run this file in node to register the commands

const commands = [ 
    {
        name: "embed",
        description: "send a embed"
    },
    {
        name: 'hey',
        description: "Replies with hey!",
    },
    {
        name: 'ping',
        description: "Pong!",
    },
    {
        name: 'boogeyman',
        description: 'Whose the boogeyman?',
    },
    {
        name: 'culv',
        description: 'Tracks your culvert',
        // type: ApplicationCommandOptionType.Number,
    },
    {
        name: 'add',
        description: 'Adds two numbers.',
        options: [
            {
                name: 'first-number',
                description: 'The first number.',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'one',
                        value: 1,
                    },
                    {
                        name: 'two',
                        value: 2,
                    },
                    {
                        name: 'three',
                        value: 3,
                    },
                ],
                required: true,
            },
            {
                name: 'second-number',
                description: 'The second number.',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    }
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);


(async () => {
    try{
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {
                body: commands
            }
        )

        console.log('Slash commands were registered')
    } catch(error){
        console.log(`There was an error: ${error}`)
    }
})();