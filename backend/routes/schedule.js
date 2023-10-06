const router = require("express").Router();
let event = require("../models/schedule");

router.route("/add").post((req,res)=>{
   
    const time = req.body.time;
    const team = req.body.team;
    const day = req.body.day;
    const venue = req.body.venue;
    
    const newschedule = new event({
 
        time,
        team,
        day,
        venue,
    })

    newschedule.save().then(()=>{
        res.json("neweschedule added")
    }).catch((err)=>{
       
        // console.log("not added");
        console.log(err);
    }) 

})

router.route("/").get((req,res)=>{
  event.find().then((schedule)=>{
      res.json(schedule);
  }).catch((err)=>{
      console.log(err)
  })
})


router.route("/update/:id").put(async (req, res)=>{
 let userId = req.params.id;
  const {time,day,team,venue} = req.body;

  const updateevent = {
        time,
        day,
        team,
        venue,
     }

     let update; // declare update variable

     try {
       update = await event.findByIdAndUpdate(userId, updateevent);
       res.status(200).send({status: "User updated", update});
     } catch (err) {
       console.log(err);
       res.status(500).send({status: "Error with update"});
     }

  // const update = await updateevent.findByIdAndUpdate(userId,updateevent).then(()=>{
  //   res.status(200).send({status: " user updated",update})
  // }).catch((err)=>{
  //   console.log(err);
  //    res.status(500).send({status:" error with update"});
  // }) 
})

router.route("/delete/:id").delete(async (req,res) =>{
  let userId = req.params.id;

  await event.findByIdAndDelete(userId).then(() =>{
    res.status(200).send({status: "schedule deleted"});
  }).catch((err)=>{
    console.log(err.massage);
    res.status(500).send({status:"error with delete massage"});
  })
})

router.route("/get/:id").get(async(req,res)=>{
  let userId = req.params.id;
  await event.findById(userId)
  .then((schedule)=>{
    res.status(200).send({status:"user fetch",schedule})
  }).catch((err)=>{
    console.log(err.massage);
    res.status(500).send({status:"error with get user",error:err.message
    })
  })
})

module.exports = router;