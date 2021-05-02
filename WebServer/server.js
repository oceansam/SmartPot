const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 6969;

// Testing
const ardUrl = "http://4b00a9264e50.ngrok.io";
const webUrl = "";
const disUrl = "";

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Consumes post requests
app.post("/hook", (req, res) => {
    const data = req.body;
    console.log(data);
    // send to webapp
    // axios
    //     .post(webUrl, data)
    //     .then((res) => console.log(res.statusCode))
    //     .catch((err) => console.error(err));

    // send to discord bot
    // TODO: format into
    // const discord_endpoint =
    //     "https://canary.discord.com/api/webhooks/837847852457656374/pb9qT0lubFR_SUVlNx0_bfOdV7_d9X2CP42LlLHxqj9B2nqpEe5MEYBwlV9JqkyzuKrb";
    // axios
    //     .post(discord_endpoint, data)
    //     .then((res) => console.log(res.statusCode))
    //     .catch((err) => console.error(err));

    res.sendStatus(200).end();
});

// filler
app.get("/", (req, res) => {
    const discord_endpoint =
        "https://canary.discord.com/api/webhooks/837847852457656374/pb9qT0lubFR_SUVlNx0_bfOdV7_d9X2CP42LlLHxqj9B2nqpEe5MEYBwlV9JqkyzuKrb";
    data = {
        username: "My Webhook Name",
        avatar_url: "",
        content: "The message to send",
    };
    res.send("Hello World!");
});

// Discord requets stats
app.get("/dis/stats", async (req, res) => {
    const newres = await axios.get(ardUrl + "/stats");
    axios
        .post(webUrl, newres.data)
        .then((res) => console.log(res.statusCode))
        .catch((err) => console.error(err));
    res.send(newres.data);
    return;
});

// Webapp requets stats
app.get("/web/stats", async (req, res) => {
    const newres = await axios.get(ardUrl + "/stats");
    res.send(newres.data);
    return;
});

// Catch events
app.post("/event", (req, res) => {
    const data = req.body;
    res.sendStatus(200).end();
    // post to web/dis
    // different types??
    if (data.event == "water") {
        axios
            .post(ardUrl + "/event", data)
            .then((res) => console.log(res.data.statusCode))
            .catch((err) => console.error(err));
    } else {
        axios
            .post(webUrl + "/event", data)
            .then((res) => console.log(res.statusCode))
            .catch((err) => console.error(err));
        axios
            .post(disUrl + "/event", data)
            .then((res) => console.log(res.statusCode))
            .catch((err) => console.error(err));
    }
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
