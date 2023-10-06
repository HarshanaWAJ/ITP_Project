const router = require("express").Router();
const event = require("../models/gamecapt");

router.route("/add").post((req,res)=>{
   
    const game = req.body.game;
    const capt_Name = req.body.capt_Name;
    
    const newEvent = new event({
 
        game,
        capt_Name
        
    })

    newEvent.save().then(()=>{
        res.json("captian added")
    }).catch((err)=>{
        console.log(err);
    }) 

});

router.route("/").get((req,res)=>{
  
  event.find().then((events)=>{
     res.json(events);
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

  await event.findByIdAndDelete(userId).then(() =>{
    res.status(200).send({status: "user deleted"});
  }).catch((err)=>{
    console.log(err.massage);
    res.status(500).send({status:"error with delete massage"});
  })
})

router.route("/get/:id").get(async(req,res)=>{
  let userId = req.params.id;
  await event.findById(userId)
  .then((event)=>{
    res.status(200).send({status:"user fetch",event})
  }).catch(()=>{
    console.log(err.massage);
    res.status(500).send({status:"error with get user",error:err.message
    })
  })
})

module.exports = router;