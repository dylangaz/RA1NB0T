//Help Module for RA1NB0T
const Discord = require('discord.js');
const config = require("../config");
const fetch = require('node-fetch');
const querystring = require('querystring');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
module.exports.load = (bot) => {
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
                        "name": "Say - `Allows the user to send a message as the bot`",
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
                        "name": "Dog - `Sends a random dog!` :dog:",
                        "value": "```dog```"
                      },
                      {
                        "name": "Fox - `Sends a random fox!` :fox:",
                        "value": "```fox```"
                      },
                      {
                        "name": "Urban - `Searches The Urban Dictionary for a term and returns the result!`",
                        "value": '```urban <"searchterm">```'
                      },
                      {
                        "name": "Joke - `Sends a random joke!`",
                        "value": '```joke```'
                      },
                      {
                        "name": "DevJoke - `Sends a random programming joke!`",
                        "value": '```devjoke```'
                      },
                      {
                        "name": "YesOrNo - `Decides a yes or no question for you!`",
                        "value": '```yesorno```'
                      },
                    ]
                  };
                  message.channel.send({ embed });
                });
                collector.on('end', collected => {
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
                });
                collector2.on('end', collected => {
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
                });
                collector3.on('end', collected => {
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
                        "name": "Say - `Allows the user to send a message as the bot`",
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
                        "name": "Dog - `Sends a random dog!` :dog:",
                        "value": "```dog```"
                      },
                      {
                        "name": "Fox - `Sends a random fox!` :fox:",
                        "value": "```fox```"
                      },
                      {
                        "name": "Urban - `Searches The Urban Dictionary for a term and returns the result!`",
                        "value": '```urban <"searchterm">```'
                      },
                      {
                        "name": "Joke - `Sends a random joke!`",
                        "value": '```joke```'
                      },
                      {
                        "name": "DevJoke - `Sends a random programming joke!`",
                        "value": '```devjoke```'
                      },
                      {
                        "name": "YesOrNo - `Decides a yes or no question for you!`",
                        "value": '```yesorno```'
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
                });
                collector4.on('end', collected => {
                });
              });
        },
    }
    //End of Module
}