//Main Module for RA1NB0T

//console.log("Bot running");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready' , async () => {
    console.log(`Logged in as ${bot.user.username}`)
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'v0.2',
            type: "STREAMING",
            url: "put your twitch url here"
        }
    });
})
commands = {};
require(`./commands`).load(bot);

bot.on('message', (message) => {
    if (message.author.id === bot.user.id) return;
    console.log(commands)

    const prefix = "+";
    if (!message.content.startsWith(prefix)) return;
    const arguments = message.content.split(" ");
    const command = arguments.shift().slice(prefix.length);
    if(commands[command]){
        commands[command].execute(message, arguments);
    }
});
process.on('unhandledRejection', (r, p) => console.warn('UnhandledRejection: ', r, p))

bot.login('place your bot token here');


//event listener to greet new guild members
bot.on('guildMemberAdd', member => {
    message.channel.startTyping();
    //sends welcome message to 'general'
    const channel = member.guild.channels.find(ch => ch.name === 'general');
    //if channel isn't found, return
    if(!channel) return;
    channel.send(`Welcome to **__${member.guild.name}__**, ${member}`);
    message.channel.stopTyping();
});

//event listener to handle errors
bot.on('error', console.error);