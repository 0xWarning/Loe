const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "who",
    aliases: ["w", "who", "info"],
    category: "info",
    description: "Who Am I ?",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setAuthor("Loe", "https://blog.spoongraphics.co.uk/wp-content/uploads/2020/03/post-thumbnail-1.jpg", "https://github.com/0xWarning")
        .setThumbnail("https://duce5lj2f2sxj.cloudfront.net/icon/premium/png-64/520439.png?Expires=1618099200&Signature=P07e3fPLg8Wufs7Do6WasssByBIBnX~W~Diazc~87G2Wq4qRbUGABr9vKMnap608qrIF5pmkaaCsCFxpk9-pX20AWdlvO59WV6GeabBDCJAwHWwncFBUkciFMDiNx~4M1MmOPFgNWUkYbbbPADUljV516IP0TPhIHzhkhQzrPGrKlSSNZEJHcltfTBWWJUoKHpQNuTqV~JcMR-cSGEXM6INuX5EdBeAvVRJ35fxqQbEn6ZUw9G-5zi6CgospBvgoCDvFr~Ot7ssvtJ5YpVnyFCRyzLaGvTnGjCXzNTKY0CBwSTaOmrerlAPOjFjzmwnPVt8I97m7RoGlu~qXy71ZlQ__&Key-Pair-Id=APKAIONEDRCDZGBCR6PA")
        .addField("Name", "Loe", true)
        .addField("What Do I Do", "Im a Logger", true)
        .addField("Who Made Me", "0xWarning", true)
        .setFooter("From the hideout")
    message.channel.send(embed);
    }
}
