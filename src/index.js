// import properties from '../src/properties.js'

// import { Client, IntentsBitField } from 'discord.js';

require('dotenv').config()
const {Client, IntentsBitField} = require('discord.js')

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
    if(message.author.bot) return
    console.log(message)
    console.log("This is the message content: ", message.content);
    if(message.content){
        message.reply("Hello I am a bot")
    }
    if(message.content == "activate"){
        message.reply("Active and ready to obey");
    }
})

// client.login(properties.DISCORD_KEY);

client.login(process.env.TOKEN)






