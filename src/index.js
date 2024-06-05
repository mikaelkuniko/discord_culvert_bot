// import properties from '../src/properties.js'

// import { Client, IntentsBitField } from 'discord.js';

require('dotenv').config()
const {Client, IntentsBitField, EmbedBuilder, ActivityType} = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers, 
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

let status = [
    {
        name: "Not like us",
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=T6eK-2OQtew&ab_channel=KendrickLamar'
    },
    {
        name: "Culvert Bot",
    },
    {
        name: "The Heart, Part VI",
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=HJeY-FXidDQ&ab_channel=Drake'
    }
]

client.on('ready', (c) => {
    console.log(`${c.user.tag} is active.`)

    // cycles through a status for the bot every 10000ms
    setInterval(()=> {
        let random =  Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random])
    }, 10000);
})

client.on('interactionCreate', async (interaction)=>{
    if(!interaction.isChatInputCommand()) return;
    console.log("this is interaction in interaction create", interaction)
    

    // if(interaction.commandName === 'ping'){
    //     interaction.reply("Pong!")
    // }

    // if(interaction.commandName === 'boogeyman'){
    //     interaction.reply('wop wop wop wop ima do my stuff')
    // }

    if(interaction.commandName === 'culv'){
        console.log('This is the interaction object', interaction)
        const score = interaction.options.get('score').value;
        // console.log("this is the interaction options object", interaction.options)
        // interaction.reply(`${interaction}`)
        interaction.reply(`${score} for this week!`)
        // message.reply(`${interaction}`)
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

    try {
        // allows user to claim a role
        if(!interaction.isButton()) return;


        await interaction.deferReply({ ephemeral: true})
    
        const role = interaction.guild.roles.cache.get(interaction.customId);
    
        if(!role){
            interaction.reply({
                content: "I couldn't find that role!",
            })
            return;
        }
    
        const hasRole = interaction.member.roles.cache.has(role.id);
        // if the user clicks the role and has it already it removes the role
        if (hasRole){
            await interaction.member.roles.remove(role);
            await interaction.editReply(`The role ${role} has been removed.`)
            return;
        }
    
        await interaction.member.roles.add(role);
        await interaction.editReply(`The role ${role} has been added.`)
    
        
    } catch (error) {
        console.log(error)
    }
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
    if(message.content == "activate"){
        message.reply("Active and ready to obey");
        return;
    }
    if(message.content){
        message.reply("Hello I am a bot")
    }
})

// client.login(properties.DISCORD_KEY);

client.login(process.env.TOKEN)






