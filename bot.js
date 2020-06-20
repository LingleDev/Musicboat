console.log(process.platform)

require('dotenv').config()

const discord = require('discord.js')
const mongoose = require('mongoose')
const bot = new discord.Client()
bot.commands = new discord.Collection()
bot.prefix = "m-"
bot.events = new discord.Collection()

global.embed = discord.MessageEmbed
global.fs = require('fs')
global.GuildModel = require('./models/Guild')
global.UserModel = require('./models/User')

mongoose.connect(`mongodb+srv://FHGDev:L0lNo0bl4e5@cluster0-mbmox.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connected to Atlas.")
})
.catch(err => {
    console.error(`Couldn't connect to Atlas.\n${err}`)
})

fs.readdir('./commands/', (error, files) => {
    if (error) throw new Error(error);

    files.filter(f => f.endsWith("js")).forEach((f,_i) => {
        bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
    })
})

bot.on('ready', () => {
    console.log(`${bot.user.username} is ready!`)
})

bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.guild) return message.channel.send(`I cannot be used outside of a guild.`);
    
    /**
     * @type {mongoose.Model}
     */
    const Guild = GuildModel
    /**
     * @type {mongoose.Model}
     */
    const User = UserModel

    Guild.findOne({ id: message.guild.id }, (err, doc) => {
        if (doc) {
            bot.prefix = doc.prefix
        } else {
            const newG = new Guild({
                id: message.guild.id,
                owner: message.guild.ownerID
            })

            newG.save()
        }
    })

    if (!message.content.startsWith(bot.prefix)) return;

    const mArray = message.content.split(" ")
    const args = mArray.slice(1)
    const cmd = bot.commands.get(mArray[0].slice(bot.prefix.length))
    
    if (cmd) {
        User.findOne({ id: message.author.id }, (err,doc) => {
            if (doc) {
                if (!doc.blacked) {
                    cmd.run(bot, message, args)
                } else return;
            } else {
                const newU = new User({
                    id: message.author.id
                })

                newU.save()

                cmd.run(bot, message, args);
            }
        })
    }
})

bot.login(process.env.token)