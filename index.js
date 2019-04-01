//Main Module for RA1NB0T
//console.log("Bot running");
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('ready' , async () => {
    console.log(`Logged in as ${bot.user.username}`)
    bot.user.setStatus('available')
    bot.user.setPresence(config.defaultPresence);
})
commands = {};
require(`./commands`).load(bot);

bot.on('message', (message) => {
    if (message.author.id === bot.user.id) return;

    const prefix = "+";
    if (!message.content.startsWith(prefix)) return;
    const arguments = message.content.split(" ");
    const command = arguments.shift().slice(prefix.length);
    if(commands[command]){
        commands[command].execute(message, arguments);
    }
});
process.on('unhandledRejection', (r, p) => console.warn('UnhandledRejection: ', r, p))

bot.login(config.token);


//event listener to greet new guild members
bot.on('guildMemberAdd', member => {
    //sends welcome message to 'general'
    const channel = member.guild.channels.find(ch => ch.name === 'general');
    //if channel isn't found, return
    if(!channel) return;
    channel.send(`Welcome to **__${member.guild.name}__**, ${member}`);
});

//event listener to handle errors
bot.on('error', console.error);