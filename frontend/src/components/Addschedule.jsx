import React from "react";
import "./css/apply.css";
import { useNavigate } from "react-router-dom";
import  {useState} from 'react';
import axios from "axios";

        
function Addschedule() {


  const [time,setname] = useState("");
  const [day,setindexNo] = useState("");
  const [team,setgender] = useState("");
  const [venue,setgread] = useState("");
  

  const Navigate = useNavigate();

    function sendData(e) {
      // alert("inserted schedule")
      e.preventDefault();
      const newschedule = {
        time,
        day,
        team,
        venue,
        
      };
      axios.post("http://localhost:8070/schedule/add", newschedule)
      .then(()=>{
        alert("schedule added")
        window.location.reload(false);
      })
      .catch((err)=>{
        alert(err)
      })

    }

  return (

    <div className="container" >
      <center>
      <form className="formstyle"  onSubmit={sendData}>
     
  <div className="form-group">
    <label for="exampleInputEmail1" className="label">TIME</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter Name" required="true" onChange={(e)=>{setname(e.target.value);}} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1"className="label">DAY</label>
    <input type="date" style={{width:"70%"}} className="form-control" id="IndexNumber" aria-describedby="emailHelp" placeholder="Enter Index Number" required="true" onChange={(e)=>{setindexNo(e.target.value);}}></input>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1"className="label">TEAM</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="IndexNumber" aria-describedby="emailHelp" placeholder="Enter Index Number" required="true" onChange={(e)=>{setgender(e.target.value);}}></input>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1" className="label">VENUE</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="Gread" aria-describedby="emailHelp" placeholder="Enter Gread" required="true" onChange={(e)=>{setgread(e.target.value);}}></input>
    
  </div>
   
  <div>
  <button type="submit" className="buttonsubmit" >ADD</button>
  <button type="submit" className="buttonsubmit" onClick={()=>Navigate(`/event`)}>Back</button>
  </div>
 
  </form>
  </center>
</div>
  
        
      )
  }

 export default Addschedule;