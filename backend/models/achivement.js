const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const achive = new Schema({

    gamename : {
        type :String,
        require:true,
    },

    achive : {
        type : String,
        require:true,
    },


})
const achivement = mongoose.model("achivement",achive);

module.exports = achivement; 