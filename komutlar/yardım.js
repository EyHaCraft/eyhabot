const Discord = require("discord.js");

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("EyHa Bot")
    .addField("e!moderasyon", "Moderasyon komutlarını atar.", true)
    .addField("e!eğlence", "eğlence komutlarını atar.", true)
    .addField("e!kullanıcı", "Kullanıcı komutları atar.", true)
    .addField("e!hazır-sunucu", "Hazır sunucu komutlarını atar.", true)
    .addField("e!istatistik", "Botun İstatistiklerini Görürsün.", true)
    .addField("e!davet", "Botu Sunucuna Eklemek İçin Bu Komutu Kullan.", true);

  message.channel.sendEmbed(embed).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "e!yardım",
  description: "The Help Command",
  usage: "yardım"
};
