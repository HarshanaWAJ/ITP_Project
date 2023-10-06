import React from "react";
import "./css/apply.css";
import { useNavigate } from "react-router-dom";
import  {useState} from 'react';
import axios from "axios";

        
function Addachive() {


  const [gamename,setgamename] = useState("");
  const [achive,setachive] = useState("");
  
  

  const Navigate = useNavigate();

    function sendData(e) {
      // alert("inserted schedule")
      e.preventDefault();
      const newachive = {
        gamename,
        achive,
       
        
      };
      axios.post("http://localhost:8070/achive/add", newachive)
      .then(()=>{
        alert("achive added")
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
    <label for="exampleInputEmail1" className="label">GAME EVENT</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter Name" required="true" onChange={(e)=>{setgamename(e.target.value);}} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1"className="label">ACHIVEMRNT	</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="IndexNumber" aria-describedby="emailHelp" placeholder="Enter Index Number" required="true" onChange={(e)=>{setachive(e.target.value);}}></input>
    
</div>
   
  <div>
  <button type="submit" className="buttonsubmit" >Add Achive</button>
  <button type="submit" className="buttonsubmit" onClick={()=>Navigate(`/event`)}>Back</button>
  </div>
 
  </form>
  </center>
</div>
  
        )
  }

 export default Addachive;