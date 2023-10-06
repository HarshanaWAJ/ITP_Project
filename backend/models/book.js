const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    
    author: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    available: {
        type: Boolean,
        
    },
    noofbooks:{
        type:String
        
    },
  
    image: {
        type: String,
        

    }
});

module.exports = mongoose.model("book",bookSchema);
//books