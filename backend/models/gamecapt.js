const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gamecapt = new Schema({

    game : {
        type :String,
        require:true,
    },

    capt_Name : {
        type : String,
        require:true,
    },


})
const captlist = mongoose.model("gamecapt",gamecapt);

module.exports = captlist; 