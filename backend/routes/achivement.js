const router = require("express").Router();
const achivement = require("../models/achivement");

router.route("/add").post((req,res)=>{
   
    const gamename = req.body.gamename;
    const achive = req.body.achive;
    
    const newachive = new achivement({
 
        gamename,
        achive
        
    })

    newachive.save().then(()=>{
        res.json("achive added")
    }).catch((err)=>{
        console.log(err);
    }) 

});

router.route("/").get((req,res)=>{
  
  achivement.find().then((newachive)=>{
     res.json(newachive);
  }).catch((err)=>{
      console.log(err)
  })

})

router.route("/update/:id").put(async (req, res)=>{
  let userId = req.params.id;
  const { game, capt_Name } = req.body;

  const updateevent = {
    game,
    capt_Name
  }

  let update;
  try {
    update = await event.findByIdAndUpdate(userId, updateevent);
    res.status(200).send({status: "user updated", update})
  } catch (err) {
    console.log(err);
    res.status(500).send({status: "error with update"});
  }
})


router.route("/delete/:id").delete(async (req,res) =>{
  let userId = req.params.id;

  await achivement.findByIdAndDelete(userId).then(() =>{
    res.status(200).send({status: "user deleted"});
  }).catch((err)=>{
    console.log(err.massage);
    res.status(500).send({status:"error with delete massage"});
  })
})

router.route("/get/:id").get(async(req,res)=>{
  let userId = req.params.id;
  await achivement.findById(userId)
  .then((event)=>{
    res.status(200).send({status:"user fetch",event})
  }).catch(()=>{
    console.log(err.massage);
    res.status(500).send({status:"error with get user",error:err.message
    })
  })
})

module.exports = router;