//Commands Module for RA1NB0T
const Discord = require('discord.js');
const config = require("./config");
const fetch = require('node-fetch');
const querystring = require('querystring');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
module.exports.load = (bot) => {
  //test command
    commands.test = {
        "channel": null,
        "execute": async (message, args) => {
            message.channel.send('Hey! :wave:')
        },
    }
    //displays a help message
    commands.help = {
        "channel": null,
        "execute": async (message, args) => {
          var author =  message.author
            var reaction_numbers = ["\u0030\u20E3","\u0031\u20E3","\u0032\u20E3","\u0033\u20E3","\u0034\u20E3","\u0035\u20E3", "\u0036\u20E3","\u0037\u20E3","\u0038\u20E3","\u0039\u20E3"]
              message.channel.send(`${author}, I sent the command list to your DMs! :mailbox_with_mail: `);
              const embed = {
                "title": "__Command List__",
                "description": "Visit the bot's page on my website [here](http://old.rainsoftware.ml/downloads/Bots/ra1nb0t/)",
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
                    "name": "Display Fun Commands.",
                    "value": ":one:"
                  },
                  {
                    "name": "Display Utility Commands.",
                    "value": ":two:"
                  },
                  {
                    "name": "Display Moderation Commands.",
                    "value": ":three:"
                  },
                  {
                    "name": "Display all Commands.",
                    "value": ":four:"
                  },
                ]
              };
              message.author.send({ embed })
              .then(function (message) {
                message.react(reaction_numbers[1])
                .then(() => message.react(reaction_numbers[2]))
                .then(() => message.react(reaction_numbers[3]))
                .then(() => message.react(reaction_numbers[4]))
                .catch(() => console.error('One of the emojis failed to react.'));
    
                const filter = (reaction, user) => {
                  return reaction.emoji.name === reaction_numbers[1] && user.id === author.id;
                };
      
                const filter2 = (reaction2, user) => {
                  return reaction2.emoji.name === reaction_numbers[2] && user.id === author.id;
                };
      
                const filter3 = (reaction3, user) => {
                  return reaction3.emoji.name === reaction_numbers[3] && user.id === author.id;
                };

                const filter4 = (reaction4, user) => {
                  return reaction4.emoji.name === reaction_numbers[4] && user.id === author.id;
                };
                
                const collector = message.createReactionCollector(filter, { time: 60000 });
                
                const collector2 = message.createReactionCollector(filter2, { time: 60000 });
      
                const collector3 = message.createReactionCollector(filter3, { time: 60000 });
                
                const collector4 = message.createReactionCollector(filter4, { time: 60000 });
                //1
                collector.on('collect', (reaction, reactionCollector) => {
                  const embed = {
                    "title": "__Command List__ **[FUN]**",
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
                        "name": "Cat - `Sends a random cat!` :cat:",
                        "value": "```cat```"
                      },
                      {
                        "name": "Urban - `Searches The Urban Dictionary for a term and returns the result!`",
                        "value": '```urban <"searchterm">```'
                      },
                    ]
                  };
                  message.channel.send({ embed });
                  console.log(`Collected ${reaction.emoji.name}`);
                });
                
                collector.on('end', collected => {
                  console.log(`Collected ${collected.size} items`);
                });
                //2
                collector2.on('collect', (reaction2, reactionCollector) => {
                  const embed = {
                    "title": "__Command List__ **[UTILITY]**",
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
                        "value": '```feedback <"message">```'
                      },
                      {
                        "name": "Support - `Sends an invite to the RA1NB0T Support guild.`",
                        "value": "```support```"
                      },
                      {
                        "name": "Coin Flip - `Flips a coin. Shocking, I know :)`",
                        "value": "```flip```"
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
                        "name": "Guilds - `Lists the number of guilds that the bot is in.`",
                        "value": "```guilds```"
                      },
                      {
                        "name": "Whatsnew - `Lists new features and commands.`",
                        "value": "```whatsnew```"
                      },
                      {
                        "name": "Userinfo - `Lists information about the chosen user.`",
                        "value": "```userinfo <@user>```"
                      },
                      {
                        "name": "Serverinfo - `Lists information about the current guild.`",
                        "value": "```serverinfo```"
                      },
                    ]
                  };
                  message.channel.send({ embed });
                  console.log(`Collected ${reaction2.emoji.name}`);
                });
                
                collector2.on('end', collected => {
                  console.log(`Collected ${collected.size} items`);
                });
      
                //3
                collector3.on('collect', (reaction3, reactionCollector) => {
                  const embed = {
                    "title": "__Command List__ **[MODERATION]**",
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
                        "name": "Kick - `Kicks a user from the guild.` **(Requires ADMINISTRATOR permission)**",
                        "value": "```kick <@user> <reason>```"
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
                  message.channel.send({ embed });
                  console.log(`Collected ${reaction3.emoji.name}`);
                });
                
                collector3.on('end', collected => {
                  console.log(`Collected ${collected.size} items`);
                });
                //4
                collector4.on('collect', (reaction4, reactionCollector) => {
                  const embed = {
                    "title": "__Command List__ **[COMPLETE]**",
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
                        "value": '```feedback <"message">```'
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
                        "name": "Cat - `Sends a random cat!` :cat:",
                        "value": "```cat```"
                      },
                      {
                        "name": "Urban - `Searches The Urban Dictionary for a term and returns the result!`",
                        "value": '```urban <"searchterm">```'
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
                        "name": "Support - `Sends an invite to the RA1NB0T Support guild.`",
                        "value": "```support```"
                      },
                      {
                        "name": "Guilds - `Lists the number of guilds that the bot is in.`",
                        "value": "```guilds```"
                      },
                      {
                        "name": "Whatsnew - `Lists new features and commands.`",
                        "value": "```whatsnew```"
                      },
                      {
                        "name": "Userinfo - `Lists information about the chosen user.`",
                        "value": "```userinfo <@user>```"
                      },
                      {
                        "name": "Serverinfo - `Lists information about the current guild.`",
                        "value": "```serverinfo```"
                      },
                      {
                        "name": "Kick - `Kicks a user from the guild.` **(Requires ADMINISTRATOR permission)**",
                        "value": "```kick <@user> <reason>```"
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
                  message.channel.send({ embed });
                  console.log(`Collected ${reaction4.emoji.name}`);
                });
                
                collector4.on('end', collected => {
                  console.log(`Collected ${collected.size} items`);
                });
              });
          
          
              
        },
    }
    //Lists new features
  commands.whatsnew = {
    "channel": null,
    "execute": async (message, args) => {
      message.channel.send("**What's new?** \n * +userinfo \n * +serverinfo \n * +cat \n * +urban");
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

          message.channel.send(`${user}`)
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
            message.channel.send(args.join(" "))
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
              message.channel.send("Heads")
              loopActive = false;
              break;
            }
            else if(n==1)
            {
              message.channel.send("Tails")
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
          message.channel.send('I am really sorry. I hope that you can find it somewhere in your heart to forgive me. :cry:')
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
            message.channel.send(`${message.author} takes their shot...`)
            message.channel.send(`${message.author} couldn't handle the recoil!`)
            message.channel.send(`${message.author}'s assassination attempt on ${user} has failed!`, {files: ["./assets/shoot/0.gif"]});
            loopActive = false;
            break;
          }
          else if(n==1)
          {
            message.channel.send(`${message.author} takes their shot...`)
            message.channel.send(`The bullet ricochets off of a metal object and strikes ${message.author} right in the forehead!`, {files: ["./assets/shoot/1.gif"]});
            loopActive = false;
            break;
          }
          else if(n==2)
          {
            message.channel.send(`${message.author} absolutely obliterates ${user}!`, {files: ["./assets/shoot/2.gif"]});
            loopActive = false;
            break;
          }

          else if(n==3)
          {
            message.channel.send(`${message.author} takes their aim...`)
            message.channel.send(`and...`)
            message.channel.send(`${user}'s head explodes!`, {files: ["./assets/shoot/3.gif"]});
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
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Click *`)
            message.channel.send(`${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==1)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Click *`)
            message.channel.send(`${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==2)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Click *`)
            message.channel.send(`${message.author} Lives!`)
            loopActive = false;
            break;
          }

          else if(n==3)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Click *`)
            message.channel.send(`${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==4)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Click *`)
            message.channel.send(`${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==5)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Gunshot *`)
            message.channel.send(`${message.author} Dies.`)
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
  //Sends a random cat
  commands.cat = {
    "channel": null,
    "execute": async (message, args) => {
        const body = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send({
          embed: {
             image: {
                url: body.file
             },
             color: 4507862,
          }
        });
    },
  }
  //Searches Urban Dictionary for a term
  commands.urban = {
    "channel": null,
    "execute": async (message, args) => {
      if (!args.length) {
        const embed = {
          "title": ":x: Error!",
          "description": `You need to include a search term!`,
          "color": 12199999,
          "footer": {}
        };
        message.channel.send({ embed });
        return;
      }

      const query = querystring.stringify({ term: args.join(' ') });

      const  body  = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

      if (!body.list.length) {
        const embed = {
          "title": ":x: Error!",
          "description": `No results found for **${args.join(' ')}**.`,
          "color": 12199999,
          "footer": {}
        };
        message.channel.send({ embed });
        return;
      }
      const [answer] = body.list;
      const embed = new Discord.RichEmbed()
	    .setColor(4507862)
	    .setTitle(`**${answer.word}**`)
	    .setURL(answer.permalink)
	    .addField('**Definition**', trim(answer.definition, 1024))
	    .addField('**Example**', trim(answer.example, 1024))
      .addField('**Rating**', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);
      message.channel.send(embed);
    },
  }
};  