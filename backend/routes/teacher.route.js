const express = require('express');
const teacherRoutes = express.Router();


let Teachers = require('./teacher.model');

teacherRoutes.route('/addteacher').post(function (req,res){
    let teachers = new Teachers(req.body);
    teachers.save()
        .then(teachers => {
            res.status(200).json({'teacher' : 'teacher is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

teacherRoutes.route('/').get(function (req, res){
    Teachers.find(function (err,tea){
        if(err)
            console.log(err);
        else{
            res.json(tea)
        }
    });

});

teacherRoutes.route('/editteacher/:id').get(function (req,res){
    let id = req.params.id;
    Teachers.findById(id, function (err,teachers){
        res.json(teachers);
    });
});

teacherRoutes.route('/updateteacher/:id').post(function (req,res){
    let id = req.params.id;
    console.log("Update teacher id is - "+id);
    Teachers.findById(id, function (err, teachers){
        if(!teachers)
            res.status(404).send("Data is not found??");
        else{
            teachers.name = req.body.name;
            teachers.phone = req.body.phone;
            teachers.email = req.body.email;
            teachers.subject = req.body.subject;


            teachers.save().then(teachers => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

teacherRoutes.route('/deleteteacher/:id').get(function(req,res){
    Teachers.findByIdAndRemove({_id:req.params.id}, function (err, teachers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});



module.exports = teacherRoutes;