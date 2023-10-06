import React, { useState, useEffect } from "react";
import "./css/apply.css";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

        
export default function EditSchedule() {

  // const [time,setTime] = useState("");
  // const [day,setDay] = useState("");
  // const [team,setTeam] = useState("");
  // const [venue,setVenue] = useState("");

  // const {id} = useParams();
  // const [schedule, setdata] = useState([]);

  // useEffect(() => {
  //   function allschedule() {
  //     axios.get(`http://localhost:8070/apply/get/${id}`)
  //       .then((res) => {
  //         setdata(res.data); 
  //         console.log(res);  
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   }
  //   allschedule();
  // }, [id]);
 
  
  // const Navigate = useNavigate();

  //   function sendData(e) {
      
  //     e.preventDefault();
  //     const newschedule = {
  //       time,
  //       day,
  //       team,
  //       venue,
        
  //     };
  //     axios.put(`http://localhost:8070/schedule/update/${id}`, newschedule)
  //     .then(()=>{
  //       alert("schedule added")
  //       window.location.reload(false);
  //     })
  //     .catch((err)=>{
  //       alert(err)
  //     })
      
    

  return (

    
    <div className="container" >
      <center>
      <h1>aaaaaaa</h1>
     
  </center>
</div>
  
         )
  }


{/* <form className="formstyle"  onSubmit={sendData}  >
     
<div className="form-group" >
  <label for="exampleInputEmail1" className="label">TIME</label>
  <input type="text" style={{width:"70%"}} className="form-control" id="Name"  aria-describedby="emailHelp"  required="true" 
  value={schedule.time}
  onChange={(e) => setTime(e.target.value)}/>
  
</div>
<div className="form-group">
  <label for="exampleInputEmail1"className="label">DAY</label>
  <input type="text" style={{width:"70%"}} className="form-control" id="IndexNumber" aria-describedby="emailHelp"  required="true"
  value={schedule.day}
  onChange={(e) => setDay(e.target.value)} ></input>
  
</div>
<div className="form-group">
  <label for="exampleInputEmail1"className="label">TEAM</label>
  <input type="text" style={{width:"70%"}} className="form-control" id="IndexNumber" aria-describedby="emailHelp"  required="true" 
  value={team}
   onChange={(e) => setTeam(e.target.value)}></input>
  
</div>
<div className="form-group">
  <label for="exampleInputEmail1" className="label">VENUE</label>
  <input type="text" style={{width:"70%"}} className="form-control" id="Gread" aria-describedby="emailHelp"  required="true" 
  value={venue}
   onChange={(e) => setVenue(e.target.value)}></input>
  
</div>
 
<div>
<button type="submit" className="buttonsubmit" >Submit</button>
<button type="submit" className="buttonsubmit" onClick={()=>Navigate(`/sport`)} >Back</button>
</div>

</form> */}

