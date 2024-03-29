const mongoose = require('mongoose');

const tankInfoSc = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
    },
    is_active: {
        type: String,
        default: "1",
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('tank_info', tankInfoSc);