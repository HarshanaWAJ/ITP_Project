const router = require("express").Router();
let student = require("../models/apply.js");

router.route("/add").post((req,res)=>{
   
    const name = req.body.name;
    const age = req.body.age; 
    const gread = req.body.gread;
    const gender = req.body.gender;
    const indexNo = req.body.indexNo;
    const sport_type= req.body.sport_type;
    const contactNo = req.body.contactNo;
    
    const newStudent = new student({
 
        name,
        age,
        gread,
        gender,
        indexNo,
        sport_type,
        contactNo,
        
    })

    newStudent.save().then(()=>{
        res.json("student added")
    }).catch((error)=>{
        //console.log("not added");
        console.log(error);
    }) 

})

router.route("/").get((req,res)=>{
  
    student.find().then((students)=>{
       res.json(students);
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res)=>{
  let userId = req.params.id; // Convert userId to a string
  const {name,age,gread, gender,indexNo,sport_type,contactNo} = req.body;

  const updateStudent = {
    name,
    age,
    gread,
    gender,
    indexNo,
    sport_type,
    contactNo,
  }

  let update; // declare update variable

  try {
    update = await student.findByIdAndUpdate(userId, updateStudent);
    res.status(200).send({status: "User updated", update});
  } catch (err) {
    console.log(err);
    res.status(500).send({status: "Error with update"});
  }
});



router.route("/delete/:id").delete(async (req,res) =>{
  let userId = req.params.id;

  await student.findByIdAndDelete(userId).then(() =>{
    res.status(200).send({status: "user deleted"});
  }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"error with delete message"});
  });
});


router.route("/get/:id").get(async(req,res)=>{
  let userId = req.params.id;
  await student.findById(userId)
  .then((student)=>{
    res.status(200).send({status:"user fetch",student})
  }).catch(()=>{
    console.log(err.massage);
    res.status(500).send({status:"error with get user",error:err.message
    })
  })
})

module.exports = router;