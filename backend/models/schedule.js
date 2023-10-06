const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newSchedule = new Schema({
    time : {
        type :String,
        require:true,
    },
    day : {
        type :String,
        require:true,
    },
    team : {
        type :String,
        require:true,
    },
    venue : {
        type : String,
        require:true,
    },
})

const eventschedule = mongoose.model("schedule",newSchedule);

module.exports = eventschedule;