//Commands Module for RA1NB0T
const config = require("./config")
module.exports.load = (bot) => {
  //test command
    commands.test = {
        "channel": null,
        "execute": async (message, args) => {
            message.channel.sendMessage('Hey! :wave:')
        },
    }
    //displays a help message
    commands.help = {
        "channel": null,
        "execute": async (message, args) => {
          var author =  message.author
          message.channel.startTyping()
            const embed = {
                "title": "__Command List__",
                "description": "Visit the bot's page on my website [here](http://old.rainsoftware.ml/downloads/Bots/ra1nb0t/) ",
                "color": 4507862,
                "footer": {
                  "icon_url": "https://lh3.googleusercontent.com/kQmKjglSvITkgl06nuGdJb9bDMrQ7WCCguUNV6cStIXmpK3cGLrMKqbAHyxOXrYaqi2J83cni7tjI01xg7VpqIsu-676JNWywZHNZ6f62ml7bbtn8bRWqa1OQDZS_THx3yXJ8Ewz62rEnWoxd8JlYi0qjuR7GYo5pxjc-s1TUdAc6_22VDSB12aZTcbK9ViKJc0Ff_EVP2JKEHbcASMtCHABnjz2bFa4JiPBNjKPQ7eXKiP_Uvt8sTh-srbsxZQjdMPy4DlMNYB1_pfvEcyqI0uyRHwS-rPQnveqRjjqnrbST4GQXEHNFjHfESNsAGkVzVe_m2ldkStgqCgxt-svbj2syr4XEQvD8eTYdKLZKN4-c6Nj15r4EgmPpvwXL8YgPTJMIeu5MoTbWxIlEjQLHzgYG2Qvvc2bvvftCjWBLB9KqdaBzIlmsubiRDroCZwWxfB4T9j_C2GEkeG4ym6MdL8cJoW7vI9YiD1uo3WIb8fIWfYe6V7FXq10Zep9LShXq7judS0U68q1ZLx47L4oG4XeBLSYn0EsNvAx2JxSvbuytUdGUCzWv57Vz9f5AlcufA2KcbxRvcQc86Tr1uvGmhtfuaRipL0k8yfMrYrbwT2obfXuLcoXx9WTJk6cYLVJU1OcgiIQYUcJvYHKnsaGy_qbqw7bKR4=s300-no",
                  "text": "Rain#2844"
                },
                "thumbnail": {
                  "url": "https://lh3.googleusercontent.com/CpiTKMSx-or-pSgUYvyNZ1FeJ22BqJDT-MtaYr93jUOR2hGplPqrsD3o1BIUMamxlJyr9uyiwEaDzGfmR7txSGdR2uUt68-NHSS7GGZHMxjK8jLgsCD7Ew9_bvEiTM9B5MYo2Vct-h8pUAP-hrQQkTUo1P8yRJNi6yD3wkqpvxO059EzT9afrCcTUitWk65nEdrAroufQJ0p0nksLZsSjYjeVDtp_Jw7eo8CZRkOYQHTxInSfvqjhv5W61MKoBAZ2ZyylK_zMK5LaSx5HuKT92Oigd03DjC_ZGGzLn0I3A-p3e9-Kjlamf3L3Eqvf6hbHj_Mi940s-sUB69ElmrEIB1j1kNHS2fwUKWeQiN_7LOfmNkbzBQdMwm1WcMf9YBoXVjjeOnQ4kHXt_3V_Ed5tmhvkN-jUCEzj0iNKexOTM_EQ2mMec9iIs03ynF8-TcovCBz5NFQttkBuAN4jlnDvuH3Vt5Oww2CzSK-NTJO3JRXbde8RUQufX5K3GK7Sj2SfhSzV2DP4nKMiwCosfw-q0Emk__NMwB4Q6N_8hHYKgEzi-SZyBNKTGw6Px8PL9-Qa76ZOHZ8vHMfD5oSVYUBR-f_huO92cMbFTYIodNeT4oa1PUjZux6ObhQy-nMKZBPWSLcp0P1yo-rM9jI45Da8R21vS8wbue33QUrferv5tZWewtT58MaDrv6XEGrl42f3JoKJgbEUumKKV_H_SugxW13=s164-no"
                },
                "author": {
                  "name": "RA1NB0T",
                  "url": "http://old.rainsoftware.ml/downloads/Bots/ra1nb0t/",
                  "icon_url": "https://lh3.googleusercontent.com/CpiTKMSx-or-pSgUYvyNZ1FeJ22BqJDT-MtaYr93jUOR2hGplPqrsD3o1BIUMamxlJyr9uyiwEaDzGfmR7txSGdR2uUt68-NHSS7GGZHMxjK8jLgsCD7Ew9_bvEiTM9B5MYo2Vct-h8pUAP-hrQQkTUo1P8yRJNi6yD3wkqpvxO059EzT9afrCcTUitWk65nEdrAroufQJ0p0nksLZsSjYjeVDtp_Jw7eo8CZRkOYQHTxInSfvqjhv5W61MKoBAZ2ZyylK_zMK5LaSx5HuKT92Oigd03DjC_ZGGzLn0I3A-p3e9-Kjlamf3L3Eqvf6hbHj_Mi940s-sUB69ElmrEIB1j1kNHS2fwUKWeQiN_7LOfmNkbzBQdMwm1WcMf9YBoXVjjeOnQ4kHXt_3V_Ed5tmhvkN-jUCEzj0iNKexOTM_EQ2mMec9iIs03ynF8-TcovCBz5NFQttkBuAN4jlnDvuH3Vt5Oww2CzSK-NTJO3JRXbde8RUQufX5K3GK7Sj2SfhSzV2DP4nKMiwCosfw-q0Emk__NMwB4Q6N_8hHYKgEzi-SZyBNKTGw6Px8PL9-Qa76ZOHZ8vHMfD5oSVYUBR-f_huO92cMbFTYIodNeT4oa1PUjZux6ObhQy-nMKZBPWSLcp0P1yo-rM9jI45Da8R21vS8wbue33QUrferv5tZWewtT58MaDrv6XEGrl42f3JoKJgbEUumKKV_H_SugxW13=s164-no"
                },
                "fields": [
                  {
                    "name": "Help - `Displays this message.`",
                    "value": "```help```"
                  },
                  {
                    "name": " Invite - `Sends an invite link for RA1NB0T.`",
                    "value": "```invite```"
                  },
                  {
                    "name": "Feedback - `Sends feedback to the developer.`",
                    "value": "```feedback <message>```"
                  },
                  {
                    "name": "Ping - `Play some ping pong! (or annoy another user)`",
                    "value": "```ping``````pinguser <@user>```"
                  },
                  {
                    "name": "Say - `Allows the user to make the bot swear`:smiling_imp:",
                    "value": '```say <"message">```'
                  },
                  {
                    "name": "Hello - `Provides a rad greeting`",
                    "value": "```hello```"
                  },
                  {
                    "name": "Coin Flip - `Flips a coin. Shocking, I know :)`",
                    "value": "```flip```"
                  },
                  {
                    "name": "Apologize - `Apologizes to the user.`",
                    "value": "```apologize```"
                  },
                  {
                    "name": "Shoot - `Become a Hitman!`",
                    "value": "```shoot <@user>```"
                  },
                  {
                    "name": "Russian Roulette - `Play Russian Roulette!`",
                    "value": "```rr```"
                  },
                  {
                    "name": "Github - `Visit the RA1NB0T Github page!`",
                    "value": "```github```"
                  },
                  {
                    "name": "Update - `Embeds the latest RA1NB0T update video in chat!`",
                    "value": "```update```"
                  },
                  {
                    "name": "Mute - `mutes a user.` **(Requires ADMINISTRATOR permission)**",
                    "value": "```mute <@user>```"
                  },
                  {
                    "name": "Unmute - `Unmutes a user.` **(Requires ADMINISTRATOR permission)**",
                    "value": "```unmute <@user>```"
                  },
                  {
                    "name": "Purge - `Deletes a specified number of messages. (Max 25)` **(Requires ADMINISTRATOR permission)**",
                    "value": "```purge <number>```"
                  },
                  {
                    "name": "SetPresence - `Sets the bot's status` **(Restricted!)**",
                    "value": '```setpresence <PLAYING/STREAMING/LISTENING/WATCHING/reset> <"status"> ```'
                  },
                ]
              };
              message.author.send({ embed });
              message.channel.send(`${author}, I sent the command list to your DMs! :mailbox_with_mail: `);
          message.channel.stopTyping()
        },
    }
    //pings the bot
    commands.ping = {
        "channel": null,
        "execute": async (message, args) => {
          message.channel.startTyping()
            const embed = {
                "title": "__Ping__",
                "description": "Pong! :ping_pong: ",
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
          message.channel.stopTyping()
            //message.reply('Pong! :ping_pong: ')
        },
    }
    //tells the bot to ping a user. Pings command issuer if no user is specified.
    commands.pinguser = {
      "channel": null,
      "execute": async (message, args) => {
        var user = message.mentions.users.first() || message.author
        message.channel.startTyping()

          message.channel.sendMessage(`${user}`)
        message.channel.stopTyping()
      },
      
  }
  //tells the bot to repeat a user's input
    commands.say = {
        "channel": null,
        "execute": async (message, args) => {
          message.channel.startTyping()
            message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author.username} (${message})`))
            .catch(console.error);
            message.channel.sendMessage(args.join(" "))
          message.channel.stopTyping()
        },
    }
    //flips a coin
    commands.flip = {
        "channel": null,
        "execute": async (message, args) => {
          message.channel.startTyping()
          loopActive = true;
          while(loopActive)
          {
            n = Math.floor(Math.random() * 2);
            console.log(n)
            if(n==0)
            {
              message.channel.sendMessage("Heads")
              loopActive = false;
              break;
            }
            else if(n==1)
            {
              message.channel.sendMessage("Tails")
              loopActive = false;
              break;
            }
            else
            {
              loopActive = false;
              break;
            }
          }
          message.channel.stopTyping()
        },
    }
    //responds to the user with a greeting
    commands.hello = {
        "channel": null,
        "execute": async (message, args) => {
          message.channel.startTyping()
            const embed = { 
                "title": "__Hello__",
                "description": "Hey! :smile: :wave:",
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
          message.channel.stopTyping()
        },
    }
    //apologizes to the user
    commands.apologize = {
      "channel": null,
      "execute": async (message, args) => {
          message.channel.sendMessage('I am really sorry. I hope that you can find it somewhere in your heart to forgive me. :cry:')
      },
    }
    //shoots a user
    commands.shoot = {
      "channel": null,
      "execute": async (message, args) => {
        var user = message.mentions.users.first() || message.author
        loopActive = true;
        while(loopActive)
        {
          n = Math.floor(Math.random() * 4);
          console.log(n)
          if(n==0)
          {
            message.channel.sendMessage(`${message.author} takes their shot...`)
            message.channel.sendMessage(`${message.author} couldn't handle the recoil!`)
            message.channel.sendMessage(`${message.author}'s assassination attempt on ${user} has failed!`, {files: ["./assets/shoot/0.gif"]});
            loopActive = false;
            break;
          }
          else if(n==1)
          {
            message.channel.sendMessage(`${message.author} takes their shot...`)
            message.channel.sendMessage(`The bullet ricochets off of a metal object and strikes ${message.author} right in the forehead!`, {files: ["./assets/shoot/1.gif"]});
            loopActive = false;
            break;
          }
          else if(n==2)
          {
            message.channel.sendMessage(`${message.author} absolutely obliterates ${user}!`, {files: ["./assets/shoot/2.gif"]});
            loopActive = false;
            break;
          }

          else if(n==3)
          {
            message.channel.sendMessage(`${message.author} takes their aim...`)
            message.channel.sendMessage(`and...`)
            message.channel.sendMessage(`${user}'s head explodes!`, {files: ["./assets/shoot/3.gif"]});
            loopActive = false;
            break;
          }
          else
          loopActive = false;
          break;
        }
        
      },
    }
    //plays russian roulette
    commands.rr = {
      "channel": null,
      "execute": async (message, args) => {
        var user = message.author
        loopActive = true;
        while(loopActive)
        {
          n = Math.floor(Math.random() * 6);
          console.log(n)
          if(n==0)
          {
            message.channel.sendMessage(`${message.author} places the muzzle against their head...`)
            message.channel.sendMessage(`* Click *`)
            message.channel.sendMessage(`${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==1)
          {
            message.channel.sendMessage(`${message.author} places the muzzle against their head...`)
            message.channel.sendMessage(`* Click *`)
            message.channel.sendMessage(`${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==2)
          {
            message.channel.sendMessage(`${message.author} places the muzzle against their head...`)
            message.channel.sendMessage(`* Click *`)
            message.channel.sendMessage(`${message.author} Lives!`)
            loopActive = false;
            break;
          }

          else if(n==3)
          {
            message.channel.sendMessage(`${message.author} places the muzzle against their head...`)
            message.channel.sendMessage(`* Click *`)
            message.channel.sendMessage(`${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==4)
          {
            message.channel.sendMessage(`${message.author} places the muzzle against their head...`)
            message.channel.sendMessage(`* Click *`)
            message.channel.sendMessage(`${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==5)
          {
            message.channel.sendMessage(`${message.author} places the muzzle against their head...`)
            message.channel.sendMessage(`* Gunshot *`)
            message.channel.sendMessage(`${message.author} Dies.`)
            loopActive = false;
            break;
          }
          else
            loopActive = false;
            break;
        }
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
        console.log(`User ${user} has been muted`)
        
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

        console.log(`User ${user} has been unmuted`)
        
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
    //sets bot presence
    // PLAYING, STREAMING, LISTENING, WATCHING
    commands.setpresence = {
      "channel": null,
      "execute": async (message, args) => {
        const admin = message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false);
        const author = message.author
        const user = message.mentions.members.first();
        const guildname = message.guild

        // !!! Change the ID here if you would like to lock the command to your Discord ID. If you don't change this ID, or remove this if statement entirely, the command won't work!
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
        let arg1 = args[0].toLowerCase();;
        let arg2 = args.slice(1).join(" ");
        console.log(args)
        console.log(`${author.username} has changed my presence! ${args}`)
        
        if(arg1 == "playing")
        {
          bot.user.setActivity(arg2, {type: "PLAYING"})
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
          bot.user.setActivity(arg2, {type: "STREAMING", url: "https://www.twitch.tv/haywirerain"})
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
          bot.user.setActivity(arg2, {type: "LISTENING"})
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
          bot.user.setActivity(arg2, {type: "WATCHING"})
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
          bot.user.setPresence(config.defaultPresence)
          const embed = {
            "title": ":white_check_mark: Success!",
            "description": `${author} has reset my presence!`,
            "color": 1233431,
            "footer": {}
          };
          message.channel.send({ embed });
          console.log(config.defaultPresence)
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
      
      bot.fetchUser('105764405727260672').then((user) => {
        user.send(`**${author} has provided feedback:** ${message.content}`);
    });

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
        "description": `Click [here](https://github.com/HayWireRain/RA1NB0T) to visit the RA1NB0T Github page!`,
        "url": `https://github.com/HayWireRain/RA1NB0T`,
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
  //Embeds the most recent bot update video in chat
  commands.update = {
    "channel": null,
    "execute": async (message, args) => {
      message.channel.send(config.update);  
    },
  }
};