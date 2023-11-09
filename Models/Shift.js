const mongoose = require("mongoose")

const shiftschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const shift = mongoose.model("shift", shiftschema);
module.exports = shift;
