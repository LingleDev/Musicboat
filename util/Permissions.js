const { Client, GuildMember, GuildMember } = require('discord.js')

module.exports = Permissions

/**
 * Permissions module for Musicboat
 * @param {Client} bot 
 * @param {Object} help
 * @param {String} help.permission 
 * @param {GuildMember} member
 */
function Permissions(bot, help, member) {
    switch(help.permission) {
        case "GuildAdmin":
            GuildModel.findOne({ id: member.user.id }, (err,doc) => {
                
            })
        break;
    }
}