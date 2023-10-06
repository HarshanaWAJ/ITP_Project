const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({

    
    topic: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    pubishedDate: {
        type: Date,
        required: true
    },
    publishedBy: {
        type: String,
        required: true
    },
    picture: String,
});

module.exports = mongoose.model('News', newsSchema);