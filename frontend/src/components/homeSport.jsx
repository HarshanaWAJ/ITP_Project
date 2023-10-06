import React from "react";
import "./css/home.css";
 import { useNavigate } from "react-router-dom";



function Home() {

   const Navigate = useNavigate();
  
    return (
      <div>
     
      <div className="item-img">
      <img src="../images/home.jpg" alt="logo" 
      style={{ height: "310px",width :"100%", paddingRight: "10px" ,paddingLeft:"10px",borderRadius:"25px"}} />
      </div>
      
      
      <div>
      <center>
      <img src="../images/sport.jpg" alt="sport" className="images" /> 
      {/* <img src="../images/upevent.jpg" alt="upevents" className="images"/>  */}
      <img src="../images/schedule.jpg" alt="schedule" className="images"/> 
      <img src="../images/notices.jpg" alt="notices" className="images"/> 
      </center>
      <div>

      </div>
      <center>
      <button type="button" className="button" onClick={()=>{Navigate("/sport") }}  style={{textAlign:"center"}}>Sport</button>
      {/* <button type="submit" className="button" onClick={()=>{Navigate("/event") }}>Event</button> */}
      <button type="submit" className="button" onClick={()=>{Navigate("/coachuse") }}>Schedule</button>
      <button type="submit" className="button" onClick={()=>{Navigate("/event") }}>Couchuse</button>
      </center>
      </div>
      
      </div>
      )
  }
  
  
  export default Home;