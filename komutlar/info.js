const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
  var embed = new Discord.RichEmbed()
  .setColor('ORANGE')
  .setAuthor("EyHa Bot", client.user.avatarURL)
    .addField("EyHa Botunu Ekleyiniz", "[Buraya Tıklayarak Bot Ekleyebilirsin](https://discordapp.com/oauth2/authorize?client_id=681561904438837250&scope=bot&permissions=1009786942)")
    .addField("Destek Sunucumuz", " [Buraya Tıklayarak Destek Sunucusuna Gidin](https://discord.gg/9yyZ3BhDqM)")
    .addField ("Website"," [Buraya Tıklayarak Website Gidin] **Yakında Gelecektir**");
  message.channel.send({embed: embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
    
}

exports.help = {
    name: 'info',
}