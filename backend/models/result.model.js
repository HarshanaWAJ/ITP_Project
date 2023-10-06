const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Result = new Schema({
    year: {
        type: String
    },
    term: {
        type: String
    },
    grade: {
        type: String
    },
    subject: {
        type: String
    },
    marks: {
        type: String
    },
    campusid: {
        type: String
    }
}, {
    collation: 'Result'
});

module.exports = mongoose.model('Result',Result);