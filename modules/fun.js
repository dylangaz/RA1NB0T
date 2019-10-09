//Fun Module for RA1NB0T
const Discord = require('discord.js');
const config = require("../config");
const fetch = require('node-fetch');
const querystring = require('querystring');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
module.exports.load = (bot) => {
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
          const admin = message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false);
          if(!admin)
          {
            if(message.content.includes(("@everyone")) || message.content.includes("@here"))
            {
              const embed = {
                "title": ":x: Error!",
                "description": "The `ADMINISTRATOR` permission is required to send a message containing `@everyone`, or `@here`.",
                "color": 12199999,
                "footer": {}
              };
              message.channel.send({ embed });
              return;
            }
          }
          
          message.channel.startTyping()
            message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author.username} (${message})`))
            .catch(console.error);
            message.channel.send(`${message.author} says: *"${args.join(" ")}"*`)
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
          n = Math.floor(Math.random() * 6);
          if(n==0)
          {
              message.channel.send(`${message.author} takes their shot...`)
              message.channel.send(`${message.author} couldn't handle the recoil! \n${message.author}'s assassination attempt on ${user} has failed!`, {files: ["./assets/shoot/0.gif"]});
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
              message.channel.send(`and... \n${user}'s head explodes!`, {files: ["./assets/shoot/3.gif"]});
              loopActive = false;
              break;
          }
          else if(n==4)
          {
              message.channel.send(`${message.author} readies their weapon...`)
              message.channel.send(`and... \n${message.author} blows up ${user}'s house!`, {files: ["./assets/shoot/4.gif"]});
              loopActive = false;
              break;
          }
          else if(n==5)
          {
              message.channel.send(`${message.author} snaps ${user} out of existence!`, {files: ["./assets/shoot/5.gif"]});
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
          if(n==0)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Click * \n${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==1)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Click * \n${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==2)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Click * \n${message.author} Lives!`)
            loopActive = false;
            break;
          }

          else if(n==3)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Click * \n${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==4)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Click * \n${message.author} Lives!`)
            loopActive = false;
            break;
          }
          else if(n==5)
          {
            message.channel.send(`${message.author} places the muzzle against their head...`)
            message.channel.send(`* Gunshot * \n${message.author} Dies.`)
            loopActive = false;
            break;
          }
          else
            loopActive = false;
            break;
        }
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
    //Sends a random fox
    commands.fox = {
      "channel": null,
      "execute": async (message, args) => {
          const body = await fetch('https://randomfox.ca/floof/').then(response => response.json());
          message.channel.send({
            embed: {
               image: {
                  url: body.image
               },
               color: 4507862,
            }
          });
      },
    }
    //Sends a random dog
    commands.dog = {
      "channel": null,
      "execute": async (message, args) => {
          const body = await fetch('https://random.dog/woof.json').then(response => response.json());
          var tester = body
          if(body.url.includes(".mp4")){
            message.channel.send(body.url)
          }
          else {
            message.channel.send({
              embed: {
                 image: {
                    url: body.url
                 },
                 color: 4507862,
              }
            });
          }
      },
    }
    //Returns a random joke
    commands.joke = {
      "channel": null,
      "execute": async (message, args) => {
          const body = await fetch(`https://official-joke-api.appspot.com/jokes/random`).then(response => response.json());
  
          const embed = { 
            "title": `**Joke #${body.id}**`,
            "description": `${body.setup} \n \n *${body.punchline}*`,
            "color": 4507862,
          };
          message.channel.send({ embed });
      },
    }
    //Returns a random programming joke
    commands.devjoke = {
      "channel": null,
      "execute": async (message, args) => {
          const body = await fetch(`https://official-joke-api.appspot.com/jokes/programming/random`).then(response => response.json());
          const embed = { 
            "title": `**Joke #${body[0].id}**`,
            "description": `${body[0].setup} \n \n *${body[0].punchline}*`,
            "color": 4507862,
          };
          message.channel.send({ embed });
      },
    }
    //Returns yes or no
    commands.yesorno = {
      "channel": null,
      "execute": async (message, args) => {
          const body = await fetch(`https://yesno.wtf/api`).then(response => response.json());
          const embed = { 
            "title": `**Yes or No**`,
            "description": `**${body.answer}**`,
            "image": {
              url: body.image
            },
            "color": 4507862,
          };
          message.channel.send({ embed });
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
        .addField('**Rating**', `:thumbsup: ${answer.thumbs_up}  \n\n:thumbsdown: ${answer.thumbs_down}`);
        message.channel.send(embed);
      },
    }
    //returns random number between two numbers inclusive
    commands.rng = {
      "channel": null,
      "execute": async (message, args) => {
        args = message.content.trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let min = args[0];
        let max = args.slice(1).join(" ");
        n = Math.floor(Math.random() * (max - min + 1) + min);
        message.channel.send(n)
      },
    }
    //End of Module
}