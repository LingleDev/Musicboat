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
    if (member.user == bot.owner) return true
    
    switch(help.permission) {

        case "GuildAdmin":
            GuildModel.findOne({ id: member.guild.id }, (err,doc) => {
                if (member.roles.cache.has(doc.admin) || member.guild.owner) {
                    return true
                } else return false;
            })
        break;

        case "PremiumOnly":
            GuildModel.findOne({ id: member.guild.id }, (err,doc) => {
                if (doc.premium) {
                    return true;
                } else return false;
            })
        break;

        case "DJOnly":
            GuildModel.findOne({ id: member.guild.id }, (err,doc) => {
                if (doc.DJEnabled) {
                    if (member.roles.cache.has(doc.dj) || member.guild.owner) {
                        return true
                    } else return false;
                } else return true;
            })
        break;

        default:
            return false;
        break;
    }
}