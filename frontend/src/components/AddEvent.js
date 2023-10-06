import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './events.css'

const AddEvent = () => {
    const [Event_Name, setEvent_Name] = useState("");
    const [Event_Location, setEvent_Location] = useState("");
    const [Event_Handler, setEvent_Handler] = useState("");
    const [Event_Image, setEvent_Image] = useState("");
    const navigate = useNavigate();

    function sendData(e) {
        e.preventDefault();

        const newEvent = {
            Event_Name,
            Event_Location,
            Event_Handler,
            Event_Image
        }

        axios.post("http://localhost:8080/event/add", newEvent).then(() => {
            alert("Event added");
            navigate("/view");
        }).catch((err) => {
            alert(err)
        })
    }
    const buttonStyle = {
        display: "inline-block",
        backgroundImage: "linear-gradient(125deg,#a72879,#064497)",
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontSize: "16px",
        width: "200px",
        height: "36px",
        border: "none",
        cursor: "pointer",
        align: "center",
    };

    function clearform() {
        setEvent_Name("");
        setEvent_Location("");
        setEvent_Handler("");
        setEvent_Image("");
    }

    return (
        <div className="container" style={{backgroundImage:"url(https://www.tads.com/wp-content/uploads/2021/07/Blog_Card_Template-01-1080x675.png)" ,backgroundSize:'cover'}}>
            {/* <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="btype">Event Name</label>
                    <input type="text" className="form-control" id="eventn" placeholder="Enter Event Name" onChange={(e) => {
                        setEvent_Name(e.target.value);
                    }} />
                </div>
                <div class="form-group">
                    <label for="bmonth">Location of the event</label>
                    <input type="text" class="form-control" id="eventl" placeholder="Enter Event Location" onChange={(e) => {
                        setEvent_Location(e.target.value);
                    }} />
                </div>
                <div class="form-group">
                    <label for="bamount">Handler of the event</label>
                    <input type="text" class="form-control" id="eventh" placeholder="Enter Event Handler" onChange={(e) => {
                        setEvent_Handler(e.target.value);
                    }} />
                </div>
                <div class="form-group">
                    <label for="bamount">Event Image</label>
                    <input type="text" class="form-control" id="eventh" placeholder="Enter Event Image" onChange={(e) => {setEvent_Image(e.target.value)}} />
                </div>


                <button type="submit" class="btn btn-primary" style={{ float: "left", marginLeft: '10px' }}>Submit</button>




            </form> */}



            <div class="container-fluid px-1 py-5 mx-auto bodyevetadd">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                       
                        <div class="card cardevetadd">
                            <h5 class="text-center mb-4">Add New Event</h5>
                            <form class="form-card" onSubmit={sendData}>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-12 flex-column d-flex">
                                        <label class="form-control-label form-control-labelevetadd px-3">Event Name<span class="text-danger"> *</span></label>
                                        <input value={Event_Name} required className=" inputevetadd buttonevetadd" type="text" id="lname" name="lname" placeholder="Enter event name" onChange={(e) => {setEvent_Name(e.target.value)}} onblur="validate(2)" /> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-12 flex-column d-flex">
                                        <label class="form-control-label form-control-labelevetadd px-3">Location of the Event<span class="text-danger"> *</span></label>
                                        <input value={Event_Location} required className=" inputevetadd buttonevetadd" type="text" id="mob" name="mob" placeholder="Enter event location" onblur="validate(4)" onChange={(e) => {setEvent_Location(e.target.value)}} /> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-12 flex-column d-flex">
                                        <label class="form-control-label form-control-labelevetadd px-3">Handler of the Event <span class="text-danger"> *</span></label>
                                        <input value={Event_Handler} required className=" inputevetadd buttonevetadd" type="text" id="job" name="job" placeholder="Enter event handler" onblur="validate(5)" onChange={(e) => {setEvent_Handler(e.target.value)}}/> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex">
                                        <label class="form-control-label form-control-labelevetadd px-3">Event Image<span class="text-danger"> *</span></label>
                                        <input value={Event_Image} required className=" inputevetadd buttonevetadd" type="text" id="ans" name="ans" placeholder="Enter event image" onblur="validate(6)" onChange={(e) => {setEvent_Image(e.target.value)}}  /> </div>
                                </div>
                                <div class="row justify-content-end">
                                <div class="form-group col-sm-6"> <button type="button" class=" buttonevetadd btn-block btn-blockevetadd btn-dark buttonevetadd" onClick={()=>{clearform()}}>Clear</button> </div>
                                    <div class="form-group col-sm-6"> <button type="submit" class=" buttonevetadd btn-block btn-blockevetadd btn-success buttonevetadd">Add Event</button> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    )
}

export default AddEvent;
