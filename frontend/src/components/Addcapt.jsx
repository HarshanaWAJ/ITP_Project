import React from "react";
import "./css/apply.css";
import { useNavigate } from "react-router-dom";
import  {useState} from 'react';
import axios from "axios";

        
function Addcapt() {


  const [game,setgame] = useState("");
  const [capt_Name,setname] = useState("");
  
  

  const Navigate = useNavigate();

    function sendData(e) {
      // alert("inserted schedule")
      e.preventDefault();
      const newsCAPT = {
        game,
        capt_Name,
       
        
      };
      axios.post("http://localhost:8070/coachuse/add", newsCAPT)
      .then(()=>{
        //alert("captain added")
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
    <label for="exampleInputEmail1" className="label">GAME</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter Name" required="true" onChange={(e)=>{setgame(e.target.value);}} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1"className="label">CAPTAIN NAME</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="IndexNumber" aria-describedby="emailHelp" placeholder="Enter Index Number" required="true" onChange={(e)=>{setname(e.target.value);}}></input>
    
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

 export default Addcapt;