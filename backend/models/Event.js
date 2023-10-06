const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({

    Event_Name : {
        type : String,
        required: true
    },
    Event_Location:{
        type: String,
        required: true
    },
    Event_Handler:{
        type: String,
        required: true

    },
    Event_Image:{
        type: String,
        required: true

    }
})

const Event = mongoose.model("Event",eventSchema);

module.exports = Event;