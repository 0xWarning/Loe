const { readdirSync } = require("fs");
const colors = require('colors');

const ascii = require("ascii-table");

const loeStr = "[".white +"Loe".rainbow + "]".white + " ";
const errorStr = "[".white +"Error".red + "]".white + " ";
const loadedStr = "[".white +"Loaded".green + "]".white + " ";

module.exports = (client) => {

    console.log(loeStr + 'Checking Commands'.yellow);
    readdirSync("./commands/").forEach(dir => {

        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                client.commands.set(pull.name, pull);
                console.log(loadedStr + file);
            } else {
                console.log(errorStr + file + ' missing a help.name, or help.name is not a string.');
                continue;
            }

            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
}
