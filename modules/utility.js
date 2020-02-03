//Utility Module for RA1NB0T
const Discord = require('discord.js');
const config = require("../config");
const usage = require("../usage")
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
module.exports.load = (bot) => {
    //Lists new features
    commands.whatsnew = {
        "channel": null,
        "execute": async (message, args) => {
            message.channel.send(`${config.whatsnew}`);
        },
    }  
    //Uses Client ID and Bot Permission integer (Paste ID and perm integer in config.json)
    commands.invite = {
      "channel": null,
      "execute": async (message, args) => {
        const embed = {
          "title": "Invite me to your Discord guild!",
          "description": `Click [here](https://discordapp.com/oauth2/authorize?client_id=${config.clientID}&scope=bot&permissions=${config.botPerms}) to invite me to your guild!`,
          "url": `https://discordapp.com/oauth2/authorize?client_id=${config.clientID}&scope=bot&permissions=${config.botPerms}`,
          "color": 4507862,
          "thumbnail": {
            "url": "https://lh3.googleusercontent.com/CpiTKMSx-or-pSgUYvyNZ1FeJ22BqJDT-MtaYr93jUOR2hGplPqrsD3o1BIUMamxlJyr9uyiwEaDzGfmR7txSGdR2uUt68-NHSS7GGZHMxjK8jLgsCD7Ew9_bvEiTM9B5MYo2Vct-h8pUAP-hrQQkTUo1P8yRJNi6yD3wkqpvxO059EzT9afrCcTUitWk65nEdrAroufQJ0p0nksLZsSjYjeVDtp_Jw7eo8CZRkOYQHTxInSfvqjhv5W61MKoBAZ2ZyylK_zMK5LaSx5HuKT92Oigd03DjC_ZGGzLn0I3A-p3e9-Kjlamf3L3Eqvf6hbHj_Mi940s-sUB69ElmrEIB1j1kNHS2fwUKWeQiN_7LOfmNkbzBQdMwm1WcMf9YBoXVjjeOnQ4kHXt_3V_Ed5tmhvkN-jUCEzj0iNKexOTM_EQ2mMec9iIs03ynF8-TcovCBz5NFQttkBuAN4jlnDvuH3Vt5Oww2CzSK-NTJO3JRXbde8RUQufX5K3GK7Sj2SfhSzV2DP4nKMiwCosfw-q0Emk__NMwB4Q6N_8hHYKgEzi-SZyBNKTGw6Px8PL9-Qa76ZOHZ8vHMfD5oSVYUBR-f_huO92cMbFTYIodNeT4oa1PUjZux6ObhQy-nMKZBPWSLcp0P1yo-rM9jI45Da8R21vS8wbue33QUrferv5tZWewtT58MaDrv6XEGrl42f3JoKJgbEUumKKV_H_SugxW13=s164-no"
          },
          "author": {
            "name": "RA1NB0T",
            "url": "http://old.rainsoftware.ml/downloads/Bots/ra1nb0t/",
            "icon_url": "https://lh3.googleusercontent.com/CpiTKMSx-or-pSgUYvyNZ1FeJ22BqJDT-MtaYr93jUOR2hGplPqrsD3o1BIUMamxlJyr9uyiwEaDzGfmR7txSGdR2uUt68-NHSS7GGZHMxjK8jLgsCD7Ew9_bvEiTM9B5MYo2Vct-h8pUAP-hrQQkTUo1P8yRJNi6yD3wkqpvxO059EzT9afrCcTUitWk65nEdrAroufQJ0p0nksLZsSjYjeVDtp_Jw7eo8CZRkOYQHTxInSfvqjhv5W61MKoBAZ2ZyylK_zMK5LaSx5HuKT92Oigd03DjC_ZGGzLn0I3A-p3e9-Kjlamf3L3Eqvf6hbHj_Mi940s-sUB69ElmrEIB1j1kNHS2fwUKWeQiN_7LOfmNkbzBQdMwm1WcMf9YBoXVjjeOnQ4kHXt_3V_Ed5tmhvkN-jUCEzj0iNKexOTM_EQ2mMec9iIs03ynF8-TcovCBz5NFQttkBuAN4jlnDvuH3Vt5Oww2CzSK-NTJO3JRXbde8RUQufX5K3GK7Sj2SfhSzV2DP4nKMiwCosfw-q0Emk__NMwB4Q6N_8hHYKgEzi-SZyBNKTGw6Px8PL9-Qa76ZOHZ8vHMfD5oSVYUBR-f_huO92cMbFTYIodNeT4oa1PUjZux6ObhQy-nMKZBPWSLcp0P1yo-rM9jI45Da8R21vS8wbue33QUrferv5tZWewtT58MaDrv6XEGrl42f3JoKJgbEUumKKV_H_SugxW13=s164-no"
          }
        };
        message.channel.send({ embed });
      },
    } 
    //Allows users to provide feedback
    commands.feedback = {
      "channel": null,
      "execute": async (message, args) => {
        const author = message.author
        bot.channels.get('570079926238052372').send(`**${author} has provided feedback:** ${message.content}`);
        /*
        bot.fetchUser('105764405727260672').then((user) => {
          user.send(`**${author} has provided feedback:** ${message.content}`);
      });
        */
        const embed = {
          "title": ":white_check_mark: Success!",
          "description": `${author}, your feedback is much appreciated!`,
          "color": 1233431,
          "footer": {}
        };
        message.channel.send({ embed });
      },
    } 
    commands.github = {
        "channel": null,
        "execute": async (message, args) => {
    
          const embed = {
            "title": "Visit my Github page!",
            "description": `Click [here](https://github.com/dylangaz/RA1NB0T) to visit the RA1NB0T Github page!`,
            "url": `https://github.com/dylangaz/RA1NB0T`,
            "color": 4507862,
            "thumbnail": {
              "url": "https://lh3.googleusercontent.com/CpiTKMSx-or-pSgUYvyNZ1FeJ22BqJDT-MtaYr93jUOR2hGplPqrsD3o1BIUMamxlJyr9uyiwEaDzGfmR7txSGdR2uUt68-NHSS7GGZHMxjK8jLgsCD7Ew9_bvEiTM9B5MYo2Vct-h8pUAP-hrQQkTUo1P8yRJNi6yD3wkqpvxO059EzT9afrCcTUitWk65nEdrAroufQJ0p0nksLZsSjYjeVDtp_Jw7eo8CZRkOYQHTxInSfvqjhv5W61MKoBAZ2ZyylK_zMK5LaSx5HuKT92Oigd03DjC_ZGGzLn0I3A-p3e9-Kjlamf3L3Eqvf6hbHj_Mi940s-sUB69ElmrEIB1j1kNHS2fwUKWeQiN_7LOfmNkbzBQdMwm1WcMf9YBoXVjjeOnQ4kHXt_3V_Ed5tmhvkN-jUCEzj0iNKexOTM_EQ2mMec9iIs03ynF8-TcovCBz5NFQttkBuAN4jlnDvuH3Vt5Oww2CzSK-NTJO3JRXbde8RUQufX5K3GK7Sj2SfhSzV2DP4nKMiwCosfw-q0Emk__NMwB4Q6N_8hHYKgEzi-SZyBNKTGw6Px8PL9-Qa76ZOHZ8vHMfD5oSVYUBR-f_huO92cMbFTYIodNeT4oa1PUjZux6ObhQy-nMKZBPWSLcp0P1yo-rM9jI45Da8R21vS8wbue33QUrferv5tZWewtT58MaDrv6XEGrl42f3JoKJgbEUumKKV_H_SugxW13=s164-no"
            },
            "author": {
              "name": "RA1NB0T",
              "url": "http://old.rainsoftware.ml/downloads/Bots/ra1nb0t/",
              "icon_url": "https://lh3.googleusercontent.com/CpiTKMSx-or-pSgUYvyNZ1FeJ22BqJDT-MtaYr93jUOR2hGplPqrsD3o1BIUMamxlJyr9uyiwEaDzGfmR7txSGdR2uUt68-NHSS7GGZHMxjK8jLgsCD7Ew9_bvEiTM9B5MYo2Vct-h8pUAP-hrQQkTUo1P8yRJNi6yD3wkqpvxO059EzT9afrCcTUitWk65nEdrAroufQJ0p0nksLZsSjYjeVDtp_Jw7eo8CZRkOYQHTxInSfvqjhv5W61MKoBAZ2ZyylK_zMK5LaSx5HuKT92Oigd03DjC_ZGGzLn0I3A-p3e9-Kjlamf3L3Eqvf6hbHj_Mi940s-sUB69ElmrEIB1j1kNHS2fwUKWeQiN_7LOfmNkbzBQdMwm1WcMf9YBoXVjjeOnQ4kHXt_3V_Ed5tmhvkN-jUCEzj0iNKexOTM_EQ2mMec9iIs03ynF8-TcovCBz5NFQttkBuAN4jlnDvuH3Vt5Oww2CzSK-NTJO3JRXbde8RUQufX5K3GK7Sj2SfhSzV2DP4nKMiwCosfw-q0Emk__NMwB4Q6N_8hHYKgEzi-SZyBNKTGw6Px8PL9-Qa76ZOHZ8vHMfD5oSVYUBR-f_huO92cMbFTYIodNeT4oa1PUjZux6ObhQy-nMKZBPWSLcp0P1yo-rM9jI45Da8R21vS8wbue33QUrferv5tZWewtT58MaDrv6XEGrl42f3JoKJgbEUumKKV_H_SugxW13=s164-no"
            }
          };
          message.channel.send({ embed });
        },
    } 
    //Lists how many guilds the bot is in
    commands.guilds = {
      "channel": null,
      "execute": async (message, args) => {
        let msgBuilder = "";
        message.channel.send(`I am active in ${bot.guilds.size} guilds.`);
        if (message.author.id == '105764405727260672')
          {
            bot.guilds.forEach(element => {
              msgBuilder = msgBuilder + `\n` + `-${element}`
            });
            message.channel.send(msgBuilder);
          } 
      },
    } 
    //Embeds the most recent bot update video in chat
    commands.update = {
      "channel": null,
      "execute": async (message, args) => {
        message.channel.send(config.update);  
      },
    }
    //Sends an invite link to the RA1NB0T Support guild
    commands.support = {
      "channel": null,
      "execute": async (message, args) => {
        message.channel.send("https://discord.gg/4G3a7NB");  
      },
    } 
    //Sends info on the selected user
    commands.userinfo = {
      "channel": null,
      "execute": async (message, args) => {
        var user = message.mentions.users.first() || message.author
              var member = message.guild.members.get(user.id)
        var vcchannel = member.voiceChannel ? member.voiceChannel.name : "No Voice Channel"
        
        const embed = {
          "title": "__User Info__",
          "description": "Visit the bot's page on my website [here](http://old.rainsoftware.ml/downloads/Bots/ra1nb0t/) ",
          "color": 4507862,
          "footer": {
            "icon_url": "https://lh3.googleusercontent.com/kQmKjglSvITkgl06nuGdJb9bDMrQ7WCCguUNV6cStIXmpK3cGLrMKqbAHyxOXrYaqi2J83cni7tjI01xg7VpqIsu-676JNWywZHNZ6f62ml7bbtn8bRWqa1OQDZS_THx3yXJ8Ewz62rEnWoxd8JlYi0qjuR7GYo5pxjc-s1TUdAc6_22VDSB12aZTcbK9ViKJc0Ff_EVP2JKEHbcASMtCHABnjz2bFa4JiPBNjKPQ7eXKiP_Uvt8sTh-srbsxZQjdMPy4DlMNYB1_pfvEcyqI0uyRHwS-rPQnveqRjjqnrbST4GQXEHNFjHfESNsAGkVzVe_m2ldkStgqCgxt-svbj2syr4XEQvD8eTYdKLZKN4-c6Nj15r4EgmPpvwXL8YgPTJMIeu5MoTbWxIlEjQLHzgYG2Qvvc2bvvftCjWBLB9KqdaBzIlmsubiRDroCZwWxfB4T9j_C2GEkeG4ym6MdL8cJoW7vI9YiD1uo3WIb8fIWfYe6V7FXq10Zep9LShXq7judS0U68q1ZLx47L4oG4XeBLSYn0EsNvAx2JxSvbuytUdGUCzWv57Vz9f5AlcufA2KcbxRvcQc86Tr1uvGmhtfuaRipL0k8yfMrYrbwT2obfXuLcoXx9WTJk6cYLVJU1OcgiIQYUcJvYHKnsaGy_qbqw7bKR4=s300-no",
            "text": "Rain#2844"
          },
          "thumbnail": {
            "url": user.displayAvatarURL
          },
          "author": {
            "name": "RA1NB0T",
            "url": "http://old.rainsoftware.ml/downloads/Bots/ra1nb0t/",
            "icon_url": "https://lh3.googleusercontent.com/CpiTKMSx-or-pSgUYvyNZ1FeJ22BqJDT-MtaYr93jUOR2hGplPqrsD3o1BIUMamxlJyr9uyiwEaDzGfmR7txSGdR2uUt68-NHSS7GGZHMxjK8jLgsCD7Ew9_bvEiTM9B5MYo2Vct-h8pUAP-hrQQkTUo1P8yRJNi6yD3wkqpvxO059EzT9afrCcTUitWk65nEdrAroufQJ0p0nksLZsSjYjeVDtp_Jw7eo8CZRkOYQHTxInSfvqjhv5W61MKoBAZ2ZyylK_zMK5LaSx5HuKT92Oigd03DjC_ZGGzLn0I3A-p3e9-Kjlamf3L3Eqvf6hbHj_Mi940s-sUB69ElmrEIB1j1kNHS2fwUKWeQiN_7LOfmNkbzBQdMwm1WcMf9YBoXVjjeOnQ4kHXt_3V_Ed5tmhvkN-jUCEzj0iNKexOTM_EQ2mMec9iIs03ynF8-TcovCBz5NFQttkBuAN4jlnDvuH3Vt5Oww2CzSK-NTJO3JRXbde8RUQufX5K3GK7Sj2SfhSzV2DP4nKMiwCosfw-q0Emk__NMwB4Q6N_8hHYKgEzi-SZyBNKTGw6Px8PL9-Qa76ZOHZ8vHMfD5oSVYUBR-f_huO92cMbFTYIodNeT4oa1PUjZux6ObhQy-nMKZBPWSLcp0P1yo-rM9jI45Da8R21vS8wbue33QUrferv5tZWewtT58MaDrv6XEGrl42f3JoKJgbEUumKKV_H_SugxW13=s164-no"
          },
          "fields": [
            {
              "name": "User",
              "value": user.tag,
              inline: true
            },
            {
              "name": "ID",
              "value": user.id,
              inline: true
            },
            {
              "name": "Status",
              "value": user.presence.status,
              inline: true
            },
            {
              "name": "Presence",
              "value": user.presence.game ? user.presence.game.name : "n/a",
              inline: true
            },
            {
              "name": "Account Creation Date",
              "value": user.createdAt,
              inline: true
            },
            {
              "name": "Guild Join Date",
              "value": member.joinedAt,
              inline: true
            },
          ]
        };
        message.channel.send({ embed });
      },
    }
    //Sends info on the current guild
    commands.serverinfo = {
      "channel": null,
      "execute": async (message, args) => {
        var server = message.guild
        var roles = []
              server.roles.reduce((snowflake, role) => {
                  if (role.id == role.guild.id) return; // filters out @everyone
                  roles.push(role.name);
        }, []);
        var channels = []
              server.channels.reduce((snowflake, channel) => {
                  channels.push(channel.name);
        }, []);
        
        const embed = {
          "title": "__Server Info__",
          "description": "Visit the bot's page on my website [here](http://old.rainsoftware.ml/downloads/Bots/ra1nb0t/) ",
          "color": 4507862,
          "footer": {
            "icon_url": "https://lh3.googleusercontent.com/kQmKjglSvITkgl06nuGdJb9bDMrQ7WCCguUNV6cStIXmpK3cGLrMKqbAHyxOXrYaqi2J83cni7tjI01xg7VpqIsu-676JNWywZHNZ6f62ml7bbtn8bRWqa1OQDZS_THx3yXJ8Ewz62rEnWoxd8JlYi0qjuR7GYo5pxjc-s1TUdAc6_22VDSB12aZTcbK9ViKJc0Ff_EVP2JKEHbcASMtCHABnjz2bFa4JiPBNjKPQ7eXKiP_Uvt8sTh-srbsxZQjdMPy4DlMNYB1_pfvEcyqI0uyRHwS-rPQnveqRjjqnrbST4GQXEHNFjHfESNsAGkVzVe_m2ldkStgqCgxt-svbj2syr4XEQvD8eTYdKLZKN4-c6Nj15r4EgmPpvwXL8YgPTJMIeu5MoTbWxIlEjQLHzgYG2Qvvc2bvvftCjWBLB9KqdaBzIlmsubiRDroCZwWxfB4T9j_C2GEkeG4ym6MdL8cJoW7vI9YiD1uo3WIb8fIWfYe6V7FXq10Zep9LShXq7judS0U68q1ZLx47L4oG4XeBLSYn0EsNvAx2JxSvbuytUdGUCzWv57Vz9f5AlcufA2KcbxRvcQc86Tr1uvGmhtfuaRipL0k8yfMrYrbwT2obfXuLcoXx9WTJk6cYLVJU1OcgiIQYUcJvYHKnsaGy_qbqw7bKR4=s300-no",
            "text": "Rain#2844"
          },
          "thumbnail": {
            "url": server.iconURL
          },
          "author": {
            "name": "RA1NB0T",
            "url": "http://old.rainsoftware.ml/downloads/Bots/ra1nb0t/",
            "icon_url": "https://lh3.googleusercontent.com/CpiTKMSx-or-pSgUYvyNZ1FeJ22BqJDT-MtaYr93jUOR2hGplPqrsD3o1BIUMamxlJyr9uyiwEaDzGfmR7txSGdR2uUt68-NHSS7GGZHMxjK8jLgsCD7Ew9_bvEiTM9B5MYo2Vct-h8pUAP-hrQQkTUo1P8yRJNi6yD3wkqpvxO059EzT9afrCcTUitWk65nEdrAroufQJ0p0nksLZsSjYjeVDtp_Jw7eo8CZRkOYQHTxInSfvqjhv5W61MKoBAZ2ZyylK_zMK5LaSx5HuKT92Oigd03DjC_ZGGzLn0I3A-p3e9-Kjlamf3L3Eqvf6hbHj_Mi940s-sUB69ElmrEIB1j1kNHS2fwUKWeQiN_7LOfmNkbzBQdMwm1WcMf9YBoXVjjeOnQ4kHXt_3V_Ed5tmhvkN-jUCEzj0iNKexOTM_EQ2mMec9iIs03ynF8-TcovCBz5NFQttkBuAN4jlnDvuH3Vt5Oww2CzSK-NTJO3JRXbde8RUQufX5K3GK7Sj2SfhSzV2DP4nKMiwCosfw-q0Emk__NMwB4Q6N_8hHYKgEzi-SZyBNKTGw6Px8PL9-Qa76ZOHZ8vHMfD5oSVYUBR-f_huO92cMbFTYIodNeT4oa1PUjZux6ObhQy-nMKZBPWSLcp0P1yo-rM9jI45Da8R21vS8wbue33QUrferv5tZWewtT58MaDrv6XEGrl42f3JoKJgbEUumKKV_H_SugxW13=s164-no"
          },
          "fields": [
            {
              "name": "Guild Name",
              "value": `${server.name}`,
              inline: true
            },
            {
              "name": "Total Members",
              "value": `${server.memberCount}`,
              inline: true
            },
            {
              "name": "Guild Owner",
              "value": `${server.owner}`,
              inline: true
            },
            {
              "name": "Total Roles",
              "value": `${roles.length}`,
              inline: true
            },
            {
              "name": "Server ID",
              "value": `${server.id}`,
              inline: true
            },
            {
              "name": "Total Channels",
              "value": `${channels.length}`,
              inline: true
            },
          ]
        };
        message.channel.send({ embed });
      },
    } 
    //Returns discordbots vote link
    commands.vote = {
      "channel": null,
      "execute": async (message, args) => {
          message.channel.send(`https://top.gg/bot/464823337860988938/vote`);
      },
    }
    //Reads Usage JSON file
    commands.usage = {
      "channel": null,
      "execute": async (message, args) => {
          args = message.content.trim().split(/ +/g);
          const command = args.shift().toLowerCase();
          let arg1 = args[0].toLowerCase();
          let arg2 = args.slice(1).join(" ");
          
          message.channel.send(`${usage[arg1]}`);
      },
    }
    
    //End of Module
}