const mongoose = require("mongoose");
const express = require("express");
const ChannelSchema = require("./models/channel");

const app = express();

const PORT = 3000;

const dbUrl = "mongodb+srv://shyam:ZJ6vuBaYd12a9Hq1@cluster0.pzqdvp1.mongodb.net/";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.info("Connected to the DB");
    })
    .catch((e) => {
        console.error("Error:", e);
    });

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});

app.get("/insert", (req, res) => {
    var newChannel = new ChannelSchema();
    newChannel.name = "SHYAM";
    newChannel.type = "NEW";

    newChannel.save((err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send({ "error": "Failed to insert into DB" });
        } else {
            res.status(200).send({ "msg": "Inserted to DB" });
        }
    });
});
