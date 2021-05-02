const Discord = require("discord.js");
require("dotenv").config();
const axios = require("axios");
const express = require("express");

const app = express();
const PORT = 6970;
const serverUrl = "http://a5afe64868ec.ngrok.io";

// Middleware
app.use(express.json());

const client = new Discord.Client();

const prefix = process.env.PREFIX;
const token = process.env.TOKEN;
// const owner = process.env.BOT_OWNER;

client.on("ready", async () => {
    client.user.setPresence({
        status: "online",
        activity: {
            name: "soil dry...",
            type: "WATCHING",
        },
    });
    // const user = await client.users.fetch(owner);
    // user.send("I'm Ready!");
    // console.log("I'm Ready!");
});

client.on("message", async (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content.toLowerCase().startsWith(prefix + "help")) {
        // Help embed
        return;
    }

    // Get stats
    if (message.content.toLowerCase().startsWith(prefix + "stats")) {
        // Trigger stats resuest
        const res = await axios.get(serverUrl + "/dis/stats");
        message.reply(
            `\nEvent: ${res.data.event}\nPayload: ${res.data.payload.data}`
        );
        console.log(res.data);
        return;
    }

    // Water plant
    if (message.content.toLowerCase().startsWith(prefix + "water")) {
        const data = { event: "water" };
        axios
            .post(serverUrl + "/event", data)
            .then((res) => {
                if (res.statusCode == 200) {
                    message.reply(`Plant was watered.`);
                }
            })
            .catch((err) => console.error(err));
        return;
    }
});

client.login(token);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
