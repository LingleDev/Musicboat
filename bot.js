require('dotenv').config()

const discord = require('discord.js')
const bot = new discord.Client()

bot.on('ready', () => {
    console.log(`${bot.user.username} is ready!`)
})

bot.login(process.env.token)