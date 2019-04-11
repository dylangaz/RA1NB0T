//Main Module for RA1NB0T
//console.log("Bot running");
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('ready' , async () => {
    console.log(`Logged in as ${bot.user.username}`)
    bot.user.setStatus('available')
    bot.user.setPresence(config.defaultPresence);
    //bot.user.setActivity(`Active in ${client.guilds.size} servers`);
})
commands = {};
require(`./commands`).load(bot);

bot.on('message', (message) => {
    if (message.author.id === bot.user.id) return;

    const prefix = "+";
    if (!message.content.startsWith(prefix)) return;
    const arguments = message.content.split(" ");
    const command = arguments.shift().slice(prefix.length).toLowerCase();
    if(commands[command]){
        commands[command].execute(message, arguments);
    }
});
bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    //bot.user.setActivity(`Active in ${client.guilds.size} servers`);
    bot.channels.get('565690931471187969').send(`I have been removed from: **${guild.name}** (id: ${guild.id}).`);
  });
bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    //bot.user.setActivity(`Active in ${client.guilds.size} servers`);
    bot.channels.get('565690931471187969').send(`New guild joined: **${guild.name}** (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  });
process.on('unhandledRejection', (r, p) => console.warn('UnhandledRejection: ', r, p))

//event listener to greet new guild members
bot.on('guildMemberAdd', member => {
    //sends welcome message to 'general'
    const channel = member.guild.channels.find(ch => ch.name === 'general');
    //if channel isn't found, return
    if(!channel) return;
    channel.send(`Welcome to **__${member.guild.name}__**, ${member}`);
});

bot.login(config.token);

//event listener to handle errors
bot.on('error', console.error);