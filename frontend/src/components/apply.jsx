import React from "react";
import "./css/apply.css";
import { useNavigate } from "react-router-dom";
import  {useState} from 'react';
import axios from "axios";

        
function Apply() {


  const [name,setname] = useState("");
  const [indexNo,setindexNo] = useState("");
  const [gender,setgender] = useState("");
  const [gread,setgread] = useState("");
  const [age,setage] = useState("");
  const [sport_type,setsport_type] = useState("");
  const [contactNo,setcontactNo] = useState("");

  const Navigate = useNavigate();

    function sendData(e) {
      // alert("inserted")
      e.preventDefault();
      const Apply = {
        name,
        indexNo,
        gender,
        gread,
        age,
        sport_type,
        contactNo,
      
      };
      axios
      .post("http://localhost:8070/apply/add", Apply)
      .then(()=>{
        alert("Applied Success")
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
    <label for="exampleInputEmail1" className="label">Student Name</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter Name" required="true" onChange={(e)=>{setname(e.target.value);}} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1"className="label">Index Number</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="IndexNumber" aria-describedby="emailHelp" placeholder="Enter Index Number" required="true" onChange={(e)=>{setindexNo(e.target.value);}}></input>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1"className="label">Gender</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="IndexNumber" aria-describedby="emailHelp" placeholder="Enter Index Number" required="true" onChange={(e)=>{setgender(e.target.value);}}></input>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1" className="label">Gread</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="Gread" aria-describedby="emailHelp" placeholder="Enter Gread" required="true" onChange={(e)=>{setgread(e.target.value);}}></input>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1" className="label">Age</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="Age" aria-describedby="emailHelp" placeholder="Enter Age" required="true" onChange={(e)=>{setage(e.target.value);}}></input>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1" className="label"> Sport you like ?</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="Sport" aria-describedby="emailHelp" placeholder="Sport you like ?" required="true" onChange={(e)=>{setsport_type(e.target.value);}}></input>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1" className="label">contact Number</label>
    <input type="text" style={{width:"70%"}} className="form-control" id="contact" placeholder="contact" required="true" onChange={(e)=>{setcontactNo(e.target.value);}}></input>
  </div>
  <div>
  <button type="submit" className="buttonsubmit" >Submit</button>
  <button type="submit" className="buttonsubmit" onClick={()=>Navigate(`/sport`)}>Back</button>
  </div>
 
  </form>
  </center>
</div>
  
        
      )
  }

 export default Apply;