const applicantModel = require('../models/applicantModel')
const mongoose = require ('mongoose')

// get all applicants
const getApplicants = async (req,res) => {
    const applicants = await applicantModel.find({}).sort({createdAt: -1})

    res.status(200).json(applicants)
}
// get an single applicant 
const getApplicant = async (req, res) =>{
    const {id} = req.params

    const applicant = await applicantModel.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such applicant'})
    }

    if(!applicant){
        return res.status(404).json({error: 'No such applicant'})
    }
    res.status(200).json(applicant)
}


//create an applicant
const createApplicant = async(req,res) => {
    const {name, age, gender ,phone , birthday , address , email} = req.body

    let emptyFields = []

    if(!name){
        emptyFields.push('name')
    }
    if(!age){
        emptyFields.push('age')
    }
    if(!gender){
        emptyFields.push('gender')
    }
    if(!phone){
        emptyFields.push('phone')
    }
    if(!birthday){
        emptyFields.push('birthday')
    }
    if(!address){
        emptyFields.push('address')
    }
    if(!email){
        emptyFields.push('email')
    }
    if(emptyFields.length > 0 ){
        return res.status(400).json({error: 'please fill in all the fields ', emptyFields })
    }
    //add doc to db
    try{
        const applicant = await applicantModel.create({name , age , gender , phone , birthday ,address , email})
        res.status(200).json(applicant)
    }catch(error){
       res.status(400).json({error: error.message})
    }
   
}
// delete an applicant
const deleteApplicant =  async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such applicant'})
    }

    const applicant = await applicantModel.findOneAndDelete({_id: id})

    
    if(!applicant){
        return res.status(404).json({error: 'No such applicant'})
    }

    res.status(200).json(applicant)
}
//update an applicant 


const updateApplicant = async (req,res)=> {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such applicant'})
    }

    try {
        const updatedApplicant = await applicantModel.findByIdAndUpdate(id, req.body, {
            new: true, // return the updated applicant
            runValidators: true // validate the updated data against the schema
        })

        if (!updatedApplicant) {
            return res.status(404).json({error: 'No such applicant'})
        }

        res.status(200).json(updatedApplicant)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports = { 
    getApplicant,
    getApplicants,
    createApplicant,
    deleteApplicant,
    updateApplicant
}

