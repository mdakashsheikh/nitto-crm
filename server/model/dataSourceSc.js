const mongoose = require('mongoose');

const dataSourceSc = new mongoose.Schema({
    dataSource: {
        type: String,
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

module.exports = mongoose.model('dataSource', dataSourceSc);
