const { Client, Guild } = require("discord.js")
const DateModule = require('../util/Date')
/**
 * 
 * @param {Client} bot 
 * @param {Guild} guild 
 */
module.exports = (bot, guild) => {
    console.log(`${bot.user.username} joined ${guild.name} at ${DateModule.get12HourTime()}:${new Date().getMinutes()}`)
    const newG = new GuildModel({
        id: guild.id,
        owner: guild.ownerID,
        prefix: "m-",        
    })

    newG.save()
}