//Restricted Module for RA1NB0T
const Discord = require('discord.js');
const config = require("../config");
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
module.exports.load = (bot) => {
  //test command
    commands.test = {
        "channel": null,
        "execute": async (message, args) => {
            message.channel.send('Hey! :wave:');
        },
    }
    //sets bot presence
    // PLAYING, STREAMING, LISTENING, WATCHING
    commands.setpresence = {
      "channel": null,
      "execute": async (message, args) => {
        const admin = message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false);
        const author = message.author;
        const user = message.mentions.members.first();
        const guildname = message.guild;

        // !!! Change the ID here if you would like to lock the command to your Discord ID. If you don't change this ID the command won't work!
        if (message.author.id !== '105764405727260672')
        {
          const embed = {
            "title": ":x: Error!",
            "description": "This command is restricted!",
            "color": 12199999,
            "footer": {}
          };
          message.channel.send({ embed });
          return;
        } 

        args = message.content.trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let arg1 = args[0].toLowerCase();
        let arg2 = args.slice(1).join(" ");
        console.log(args);
        console.log(`${author.username} has changed my presence! ${args}`);
        
        if(arg1 == "playing")
        {
          bot.user.setActivity(arg2, {type: "PLAYING"});
          const embed = {
            "title": ":white_check_mark: Success!",
            "description": `${author} has changed my presence to ` + "`PLAYING` " + `"**${arg2}**"!`,
            "color": 1233431,
            "footer": {}
          };
          message.channel.send({ embed });
        }
        else if(arg1 == "streaming")
        {
          bot.user.setActivity(arg2, {type: "STREAMING", url: "https://www.twitch.tv/haywirerain"});
          const embed = {
            "title": ":white_check_mark: Success!",
            "description": `${author} has changed my presence to ` + "`STREAMING` " + `"**${arg2}**"!`,
            "color": 1233431,
            "footer": {}
          };
          message.channel.send({ embed });
        }
        else if(arg1 == "listening")
        {
          bot.user.setActivity(arg2, {type: "LISTENING"});
          const embed = {
            "title": ":white_check_mark: Success!",
            "description": `${author} has changed my presence to ` + "`LISTENING` " + `"**${arg2}**"!`,
            "color": 1233431,
            "footer": {}
          };
          message.channel.send({ embed });
        }
        else if(arg1 == "watching")
        {
          bot.user.setActivity(arg2, {type: "WATCHING"});
          const embed = {
            "title": ":white_check_mark: Success!",
            "description": `${author} has changed my presence to ` + "`WATCHING` " + `"**${arg2}**"!`,
            "color": 1233431,
            "footer": {}
          };
          message.channel.send({ embed });
        }
        else if(arg1 == "reset")
        {
          bot.user.setPresence({
            game: {
                name: `Active in ${bot.guilds.size} servers [${config.defaultPresence.game.name}]`,
                type: 'STREAMING',
                url: "https://www.twitch.tv/haywirerain"
            },
            status: 'online'
        });
          const embed = {
            "title": ":white_check_mark: Success!",
            "description": `${author} has reset my presence!`,
            "color": 1233431,
            "footer": {}
          };
          message.channel.send({ embed });
          console.log(config.defaultPresence);
        }
        else
        {
          const embed = {
            "title": ":x: Error!",
            "description": `Please use 'playing, watching, listening, streaming, or reset`,
            "color": 12199999,
            "footer": {}
          };
          message.channel.send({ embed });
        }
      },
    }
    //End of Module
};  