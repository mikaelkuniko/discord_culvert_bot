import properties from '../src/properties.js'

import { Client, IntentsBitField } from 'discord.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers, 
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is active.`)
})

client.on('messageCreate', (message)=> {
    console.log(message)
    if(message.content == "activate"){
        message.reply("Active and ready to obey");
    }
})

client.login(properties.DISCORD_KEY);






