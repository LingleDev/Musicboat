const ms = require('ms')

module.exports.help = {
    name: "ping"
}

module.exports.run = (bot, message, args) => {
    const ping = Math.floor(bot.ws.ping)

    const em = new embed()
    .setTitle("Musicboat Ping")
    .setAuthor(message.guild.me.displayName, bot.user.avatarURL({ format: "png" }), "https://discord.com")
    .setDescription(`PONG! My ping is ${ping}ms!`)
    .setFooter(`Requested by ${message.member.displayName}`, message.author.avatarURL)
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(em)
}