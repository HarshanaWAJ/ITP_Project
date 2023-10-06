const express = require('express');

let News = require('../models/News');
const { findById } = require('../models/Admin');

const router = express.Router();

//Add Admin Details
router.route("/add").post((req, res) => {
   
    const {topic, Description, pubishedDate, publishedBy} = (req.body);

    const newNews = new News({
        topic,
        Description,
        pubishedDate,
        publishedBy
    
    })

    newNews.save().then(() => {
        res.json("New News Added")
    }).catch((err) => {
        console.log(err);
    })
});

//Get All News
router.route("/").get((req, res)=> {
    News.find().then((news)=> {
        res.json(news)
    }).catch((err)=> {
        console.log(err)
    });
})

//Update News
router.route("/update/:id").put(async (req, res) => {
    try {
      const newsId = req.params.id;
      const { topic, description, publishedDate, publishedBy } = req.body;
      const updateNews = {
        topic,
        description,
        publishedDate,
        publishedBy,
      };
      const updatedNews = await News.findByIdAndUpdate(newsId, updateNews, {
        new: true,
      });
      res.status(200).json(updatedNews);
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "Failed to update news" });
    }
  });
  
  

//Delete News
router.route("/delete/:newsId").delete(async (req, res) => {
    let newsId = req.params.newsId;

    await News.findByIdAndDelete(newsId).then(()=> {
        res.status(200).send({status:"News deleted"});
    }).catch((err) => {
        res.status(500).send({status:"Faild to delete news"});
    });
});

//Fletch one data
router.route("/get/:id").get(async (req, res)=> {
    let newsId = req.params.id;
    
    const result = await News.findById(newsId).then((News)=> {
        res.status(200).send({status:"News found", resutlt: News});
    }).catch((err)=>{
        res.status(500).send({status:"Error in finding News"});
    })
});

module.exports = router;