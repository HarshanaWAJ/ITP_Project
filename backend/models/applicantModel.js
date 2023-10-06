const mongoose = require('mongoose')

const Schema = mongoose.Schema
const applicantSchema = new Schema({
 name: {
type: String,
 required: true 
    },
    gender:{
type : String ,
enum: ['other','male', 'female'], // use the Gender enum as the allowed values
required: true
    },
    age:{
type: Number,
required: true

    },
phone:{
 type: Number,
 required: true
        
            },
birthday: {
 type: Date,
required: true
 },
 
 address: {
    type: String,
     required: true 
        },
        
 email: {
    type: String,
     required: true 
        },


}, 

{timestamps: true})

module.exports = mongoose.model('Applicant' , applicantSchema)
