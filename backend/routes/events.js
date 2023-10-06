const router = require("express").Router();
const { Router } = require("express");
let Event = require("../models/Event");



router.route("/add").post((req, res) => {

    const Event_Name = req.body.Event_Name;
    const Event_Location = req.body.Event_Location;
    const Event_Handler = req.body.Event_Handler;
    const Event_Image = req.body.Event_Image;


    const newEvent = new Event({
        Event_Name,
        Event_Location,
        Event_Handler,
        Event_Image

    })

    newEvent.save().then(() => {
        res.json("Event Added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req, res) => {
    Event.find().then((events) => {
        res.json(events)
    }).catch((err) => {
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
    let eventId = req.params.id;
    const { Event_Name, Event_Location, Event_Handler, Event_Image } = req.body;

    const updateEvent = {
        Event_Name,
        Event_Location,
        Event_Handler,
        Event_Image
    }

    const update = await Event.findByIdAndUpdate(eventId, updateEvent)
        .then(() => {

            res.status(200).send({ status: "Event updated" })

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
})


router.route("/:id").get(async (req, res) => {
    let eventId = req.params.id;

    try {
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ success: false, message: "Event not found" });
        }
        return res.status(200).json({
            success: true,
            event
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Error with retrieving data", error: err.message });
    }
});


router.route("/delete/:id").delete(async (req, res) => {
    let eventId = req.params.id;

    await Event.findByIdAndDelete(eventId)
        .then(() => {
            res.status(200).send({ status: "Event deleted" });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with delete event", error: err.message });
        })

})



module.exports = router;