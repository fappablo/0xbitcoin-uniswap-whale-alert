const { MessageEmbed } = require("discord.js");
require('discord-reply');
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")

module.exports = {
    name: "uptime",
    category: "Information",
    aliases: ["up"],
    cooldown: 10,
    usage: "uptime",
    description: "Returns the duration on how long the Bot is online",
    run: async (client, message, args, user, text, prefix) => {
    try{
      message.lineReplyNoMention(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(ee.footertext, ee.footericon)
        .setTitle(`:white_check_mark: **${client.user.username}** is since:\n ${duration(client.uptime)} online`)
      );
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.lineReplyNoMention(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}

/** Template by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template */
