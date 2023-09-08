const mongoose = require("mongoose");

const ChannelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
});

const ChannelModel = mongoose.model("Channel", ChannelSchema);

module.exports = ChannelModel;
