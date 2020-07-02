const { Client } = require("discord.js")

module.exports = {
    get12HourTime: () => {
        const time = new Date()
        const hours = time.getHours()

        var formattedTime = null

        if (hours > 12) {
            formattedTime = hours - 12
        } else {
            formattedTime = hours
        }

        return formattedTime
    },

    getLocalizedTime: () => {
        
    },

    /**
     * @param {Client} bot
     */
    getBotReadyAtFormatted: (bot, seconds) => {
        const d = new Date(bot.readyAt)

        var hrs = d.getHours()
        var mins = d.getMinutes()
        var secs = d.getSeconds()
        var tod = "am"

        if (hrs > 12) hrs = hrs - 12;
        if (mins < 10) mins = `0${mins}`
        if (secs < 10) secs = `0${secs}`
        if (d.getHours() >= 12) tod = "pm"

        if (seconds) {
            return `${hrs}:${mins}:${secs} ${tod}`
        } else {
            return `${hrs}:${mins} ${tod}`
        }
    }
}