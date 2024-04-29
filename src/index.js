// import properties from '../src/properties.js'

// import { Client, IntentsBitField } from 'discord.js';

require('dotenv').config()
const {Client, IntentsBitField, EmbedBuilder} = require('discord.js')

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

client.on('interactionCreate', (interaction)=>{
    if(!interaction.isChatInputCommand()) return;

    if(!interaction.isButton()) return;

    const role = interaction.guild.roles.cache.get(interaction.customId);

    

    if(interaction.commandName === 'hey'){
        interaction.reply("hey!")
    }

    if(interaction.commandName === 'ping'){
        interaction.reply("Pong!")
    }

    if(interaction.commandName === 'add'){
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;
        const total = num1 + num2

        console.log("this is num1 object: ", num1)
        interaction.reply(`The sum is ${total}!`)
    }

    if(interaction.commandName === "embed"){
        const embed = EmbedBuilder()
            .setTitle('Embed title')
            .setDescripton("This is the embed descritipion")
            .setColor('Random')
            .addFields({
                name: 'Field Title',
                value: "Some random value",
                inline: true,
            },
            {
                name: 'Second Field Title',
                value: "Some random value",
                inline: true,
            });

        interaction.reply({
            embeds: [embed]
        });
    }

    console.log("this is the interaction object", interaction)
    console.log("this is command name", interaction.commandName)
})

client.on('messageCreate', (message) => {
    if(message.content === 'embed'){
        const embed = EmbedBuilder()
        .setTitle('Embed title')
        .setDescripton("This is the embed descritipion")
        .setColor('Random')
        .addFields({
            name: 'Field Title',
            value: "Some random value",
            inline: true,
        },
        {
            name: 'Second Field Title',
            value: "Some random value",
            inline: true,
        });

        message.channel.send({embed: [embed]})
    }
})


client.on('messageCreate', (message)=> {
    // listens to the message created i.e what anyone types in the discord
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






