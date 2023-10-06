const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Teachers = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    }
}, {
    collation: 'teachers'
});

module.exports = mongoose.model('Teachers',Teachers);