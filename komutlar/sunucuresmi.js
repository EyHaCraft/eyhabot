const Discord = require('discord.js')
exports.run = (client, message) => {
const whybolu= message.guild.iconURL
const eyha = new Discord.RichEmbed()
.setImage(whybolu)
.setFooter('WhYBoLu Bot')
.setColor('Random')
message.channel.send(eyha)
}
exports.conf = {
    enabled: false,
    guildOnly: false,
  aliases: ['sunucuresim'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sunucupp',
    description: 'avatar',
    usage: 'avatar'
  };