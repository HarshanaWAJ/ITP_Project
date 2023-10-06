const express = require('express')
const {
    createApplicant,
    getApplicant,
    getApplicants,
    deleteApplicant,
    updateApplicant
} = require('../controllers/applicantController')
const router = express.Router()


//get all applicants
router.get('/' ,getApplicants)
  
//get an single applicant
router.get('/:id',getApplicant)


//post an new applicant
router.post('/' , createApplicant)

//delete an applicant
router.delete('/:id' ,deleteApplicant)

//update an applicant
router.patch('/:id' , updateApplicant)


module.exports = router


