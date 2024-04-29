
require('dotenv').config();
const {Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers, 
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

const roles = [
    { 
        id: '1233063150291652639',
        label: "Black"
    },
    { 
        id: '1233063281086959658',
        label: "White"
    },
]

client.on('ready', async (c) => {
    try{
        const channel = await client.channel.cache.get('1224809783274508443');
        if(!channel) return;
        
        const row = new ActionRowBuilder()

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            )
        });

    await channel.send({
        content: 'Claim or remove a role below.',
        components: [row],
    });

    process.exit();

    } catch(error) {
        console.log(error);
    }
});

client.login(process.env.TOKEN);