const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const moment = require("moment");
require("moment-duration-format");


module.exports = {
    name: "uptime",
    aliases: ["uptime", "up", "lifespan", "lifetime"],
    category: "info",
    description: "Checks Reg's Uptime",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embed = new MessageEmbed()
        .setThumbnail("https://blog.spoongraphics.co.uk/wp-content/uploads/2020/03/post-thumbnail-1.jpg")
        .addField("Up Time", duration, true)
        .setAuthor("Loe", "https://blog.spoongraphics.co.uk/wp-content/uploads/2020/03/post-thumbnail-1.jpg", "https://github.com/0xWarning")
    message.channel.send(embed);
    }
}
