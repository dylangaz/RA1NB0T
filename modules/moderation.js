//Moderation Module for RA1NB0T
const Discord = require('discord.js');
const config = require("../config");
const fetch = require('node-fetch');
const querystring = require('querystring');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
module.exports.load = (bot) => {
    //Kicks a user from the guild
  commands.kick = {
    "channel": null,
    "execute": async (message, args) => {
      const admin = message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false);
        const author = message.author
        const user = message.mentions.members.first();
        const guildname = message.guild
        let reason = args.slice(1).join(' ');

        if(!admin)
        {
          const embed = {
            "title": ":x: Error!",
            "description": "The `ADMINISTRATOR` permission is required to use this command.",
            "color": 12199999,
            "footer": {}
          };
          message.channel.send({ embed });
          return;
        } 
        if(!user)
        {
          const embed = {
            "title": ":x: Error!",
            "description": "Please mention a valid user!",
            "color": 12199999,
            "footer": {}
          };
          message.channel.send({ embed });
          return;
        }
        if(!user.kickable)
        {
          const embed = {
            "title": ":x: Error!",
            "description": `I was not able to kick ${user}. Either that user has a higher role than me, or I do not have kick permissions. \n Try reinviting the bot using +invite to make sure that all of the required permissions are selected.`,
            "color": 12199999,
            "footer": {}
          };
          message.channel.send({ embed });
          return;
        }
        if(!reason) reason = "No reason provided";
        
        await user.kick(reason)
        .catch(error => message.reply(`Sorry, ${author}, I was not able to kick ${user} because of: ${error}`));
        
        const embed = {
          "title": ":white_check_mark: Success!",
          "description": `${author} has kicked ${user} from ${guildname} for: ${reason}!`,
          "color": 1233431,
          "footer": {}
        };
        message.channel.send({ embed });
    },
  }
  //deletes the specified number of messages (Maximum of 25 at a time)
  commands.purge = {
    "channel": null,
    "execute": async (message, args) => {
      const admin = message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false);
      const delCount = parseInt(args[0], 10);

      if(!admin)
      {
        const embed = {
          "title": ":x: Error!",
          "description": "The `ADMINISTRATOR` permission is required to use this command.",
          "color": 12199999,
          "footer": {}
        };
        message.channel.send({ embed });
        return;
      } 

      if(!delCount || delCount < 2 || delCount > 25)
      return message.reply("Please provide a number between 2 and 25 for the number of messages to delete");

      const fetched = await message.channel.fetchMessages({limit: (delCount +1)});
      message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

        const embed = {
          "title": ":white_check_mark: Success!",
          "description": `${delCount} messages were deleted!`,
          "color": 1233431,
          "footer": {}
        };
        message.channel.send({ embed });

      console.log(`User ${message.author.username} has deleted ${delCount} messages [!]`)
    },
  }
  //applies the 'muted' role to the specified user
  commands.mute = {
    "channel": null,
    "execute": async (message, args) => {
      const admin = message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false);
      const role = message.guild.roles.find(r => r.name === "Muted"); //you must have a role called 'Muted' on your discord guild
      const author = message.author
      const user = message.mentions.members.first();
      const guildname = message.guild

      if(!admin)
      {
        const embed = {
          "title": ":x: Error!",
          "description": "The `ADMINISTRATOR` permission is required to use this command.",
          "color": 12199999,
          "footer": {}
        };
        message.channel.send({ embed });
        return;
      } 

      user.addRole(role).catch(console.error);
      
      if(!message.guild.roles.find(role => role.name === "Muted"))
      {
        const embed = {
          "title": ":x: Error!",
          "description": `**${guildname}** does not have a role called 'Muted'!`,
          "color": 12199999,
          "footer": {}
        };
        message.channel.send({ embed });
      }
      else if(user.roles.find(r => r.name === "Muted"))
      {
        const embed = {
          "title": ":x: Error!",
          "description": `${user} is already muted!`,
          "color": 12199999,
          "footer": {}
        };
        message.channel.send({ embed });
      }
      else
      {
        const embed = {
          "title": ":white_check_mark: Success!",
          "description": `${author} has muted ${user}!`,
          "color": 1233431,
          "footer": {}
        };
        message.channel.send({ embed });
      }
    },
  }
   //removes the 'muted' role to the specified user
   commands.unmute = {
    "channel": null,
    "execute": async (message, args) => {
      const admin = message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false);
      const role = message.guild.roles.find(r => r.name === "Muted"); //you must have a role called 'Muted' on your discord guild
      const author = message.author
      const user = message.mentions.members.first();
      const guildname = message.guild

      if(!admin)
      {
        const embed = {
          "title": ":x: Error!",
          "description": "The `ADMINISTRATOR` permission is required to use this command.",
          "color": 12199999,
          "footer": {}
        };
        message.channel.send({ embed });
        return;
      } 
      user.removeRole(role).catch(console.error);
      
      if(!message.guild.roles.find(role => role.name === "Muted"))
      {
        const embed = {
          "title": ":x: Error!",
          "description": `**${guildname}** does not have a role called 'Muted'!`,
          "color": 12199999,
          "footer": {}
        };
        message.channel.send({ embed });
      }
      else if(!user.roles.find(r => r.name === "Muted"))
      {
        const embed = {
          "title": ":x: Error!",
          "description": `${user} is not muted!`,
          "color": 12199999,
          "footer": {}
        };
        message.channel.send({ embed });
      }
      else
      {
        const embed = {
          "title": ":white_check_mark: Success!",
          "description": `${author} has unmuted ${user}!`,
          "color": 1233431,
          "footer": {}
        };
        message.channel.send({ embed });
      }
    },
  }
  //End of Module
}