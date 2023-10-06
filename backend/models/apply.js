const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentsSchema = new Schema({

    name : {
        type : String,
        require:true,
    },

    age : { 
        type :String,
        require : true,
    },

    gread : {
        type : String,
        require : true,

    },
    gender : {
        type : String,
        require : true,

    },

    indexNo : {
        type : String,
        require : true,

    },

    sport_type : {
        type : String,
        require : true,

    },

    contactNo : {
        type : String,
        require : true,

    },
    

})

const student = mongoose.model("student",studentsSchema);

module.exports = student;