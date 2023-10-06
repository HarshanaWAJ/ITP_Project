const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminId: {
        type: String,
        required: true
    },
    adminName: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
});

module.exports =  mongoose.model('Admin',adminSchema);