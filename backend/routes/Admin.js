const express = require('express');

//Import Model
let Admin = require('../models/Admin');

const router = express.Router();

//Add Admin Details
router.route("/add").post((req, res) => {
    //variables 
    const adminId = req.body.adminId;
    const adminName = req.body.adminName;
    const DOB = req.body.DOB;
    const email = req.body.email;
    const gender = req.body.gender;
    const password = req.body.password;

    const newAdmin = new Admin({
        adminId,
        adminName,
        DOB,
        email,
        gender,
        password
    })

    newAdmin.save().then(() => {
        res.json("Admin Added")
    }).catch((err) => {
        console.log(err);
    })
});

//Get All Admins
router.route("/").get((req, res)=> {
    Admin.find().then((admin)=> {
        res.json(admin)
    }).catch((err)=> {
        console.log(err)
    });
})

//Update Admin
router.route("/update/:id").put(async (req, res) => {
    try {
      const id = req.params.id;
      const {adminId, adminName, DOB, email, gender, password} = req.body;
      const updateAdmin = {
        adminId,
        adminName,
        DOB,
        email,
        gender,
        password
    };
      const updatedAdmin = await Admin.findByIdAndUpdate(id, updateAdmin, {
        new: true,
      });
      res.status(200).json(updatedAdmin);
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "Failed to update Admin Details" });
    }
  });

//Delete
router.route("/delete/:Id").delete(async (req, res) => {
    let Id = req.params.Id;

    await Admin.findByIdAndDelete(Id).then(()=> {
        res.status(200).send({status:"Admin deleted"})
    }).catch((err) => {
        res.status(500).send({status:"Faild to delete admin"})
    });
});

//Fletch one data
router.route("/get/:id").get(async (req, res)=> {
    let adminId = req.params.id;
    
    const result = await Admin.findById(adminId).then((Admin)=> {
        res.status(200).send({status:"Admin found", resutlt: Admin});
    }).catch((err)=>{
        res.status(500).send({status:"Error in finding Admin"});
    })
});

module.exports = router;