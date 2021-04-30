const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 6969;

// Middleware
app.use(express.urlencoded());

// Consumes post requests
app.post("/hook", (req, res) => {
    const data = req.body;
    const webapp_endpoint = "";
    const discord_endpoint = "";
    // send to webapp
    axios
        .post(webapp_endpoint, data)
        .then((res) => console.log(res.statusCode))
        .catch((err) => console.error(err));

    // send to discord bot
    axios
        .post(discord_endpoint, data)
        .then((res) => console.log(res.statusCode))
        .catch((err) => console.error(err));

    res.sendStatus(200).end();
});

// filler
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
