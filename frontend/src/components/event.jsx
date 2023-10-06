import React, { useEffect, useState } from 'react';
import "./css/table.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";

function Event() {

  const Navigate = useNavigate();
  const [applications, setdata] = useState([]);
  const [gamecapt, setData] = useState([]);
  const [achive, setAData] = useState([]);

  useEffect(() => {
    function allachive() {
      axios.get('http://localhost:8070/achive')
        .then((res) => {
          setAData(res.data); 
          console.log(res);  
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    allachive();
  }, []);

  useEffect(() => {
    function allcaptains() {
      axios.get('http://localhost:8070/coachuse')
        .then((res) => {
          setData(res.data); 
          console.log(res);  
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    allcaptains();
  }, []);

  
  useEffect(() => {
    function allapplyies() {
      axios.get('http://localhost:8070/apply/')
        .then((res) => {
          setdata(res.data); // Note that the data is stored in `res.data`, not `res.applications`
          console.log(res);  
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    allapplyies();
  }, []);

  const [schedule, setschedule] = useState([]);

  useEffect(() => {
    function allschedule() {
      axios.get('http://localhost:8070/schedule/')
        .then((res) => {
          setschedule(res.data); // Note that the data is stored in `res.data`, not `res.applications`
          console.log(res);  
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    allschedule();
  }, []);

  function onDelete(_id) {
    axios.delete(`http://localhost:8070/apply/delete/${_id}`).then((res)=>{
       alert("delete applicant");
      // this.allapplyies();
      window.location.reload();

    });
  }


  function onDeleteschedule(_id) {
    axios.delete(`http://localhost:8070/schedule/delete/${_id}`).then((res)=>{
      // alert("delete application");
      // this.allapplyies();
      window.location.reload();

    });
  }

  function onDeletecapt(_id) {
    axios.delete(`http://localhost:8070/coachuse/delete/${_id}`).then((res)=>{
       alert("delete captain");
       //this.gamecapt(res);
       window.location.reload();

    });
    
  }

  function onDeleteachive(_id) {
    axios.delete(`http://localhost:8070/achive/delete/${_id}`).then((res)=>{
       alert("delete achive");
       //this.gamecapt(res);
       window.location.reload();

    });
    
  }



  const navigate = useNavigate();
  
  return (
   
    <div>
<h2 style={{color:"#640C0F"}}>STUDENT LIST APPLY FOR SPORTS.</h2>
<hr></hr>
     <table className='table,event'>
       <thead className='th'>
         <tr>
           <th scope='col'>NAME</th>
           <th scope='col'>AGE</th>
           <th scope='col'>GREAD</th>
           <th scope='col'>GENDER</th>
           <th scope='col'>INDEX NO</th>
           <th scope='col'>SPORT TYPE</th>
           <th scope='col'>CONTACT NO</th>
           <th></th>
           </tr>
       </thead>
       {applications && applications.length > 0 && (
         <tbody>
           {applications.map((application, index) => (
             <tr key={index} className='td'>
               <td className='tabledata'>{application.name}</td>
               <td className='tabledata'>{application.age}</td>
               <td className='tabledata'>{application.gread}</td>
               <td className='tabledata'>{application.gender}</td>
               <td className='tabledata'>{application.indexNo}</td>
               <td className='tabledata'>{application.sport_type}</td>
               <td className='tabledata'>{application.contactNo}</td>
              
               <a className='btn btn-danger buttonedt' href="#" onClick={()=>onDelete(application._id)}>
                <i className='fas fa-trash'></i>&nbsp;Delete
               </a>
               </tr>
            ))}
         </tbody>
          
       )}
       
     </table>
     <h2 style={{color:"#640C0F"}}>THIS MONTH SPORT PRACTICE SCHEDULE.</h2>
     <hr></hr>
<div>
<table className='table,event'>
       <thead className='th'>
         <tr>
           <th scope='col'>TIME</th>
           <th scope='col'>DAY</th>
           <th scope='col'>TEAM</th>
           <th scope='col'>VENUE</th>
           <th></th>
           </tr>  
        
       </thead>
       {schedule && schedule.length > 0 && (
         <tbody>
           {schedule.map((schedule, index) => (
             <tr key={index} className='td'>
               <td className='tabledata'>{schedule.time}</td>
               <td className='tabledata'>{schedule.day}</td>
               <td className='tabledata'>{schedule.team}</td>
               <td className='tabledata'>{schedule.venue}</td>
               
               <a className='btn btn-warning ' href={`/Testschedule/${schedule._id}`}>
                <i className='fas fa-edit'></i>&nbsp;Edit 
               </a>
               <a className='btn btn-danger buttonedt' href="#" onClick={()=>onDeleteschedule(schedule._id)}>
                <i className='fas fa-trash'></i>&nbsp;Delete
               </a>             </tr>
            ))}
         </tbody>
          
       )}
       <a className='btn btn-warning'  href="#" onClick={()=>{navigate("/Addschedule") }} >
                <i className='fas fa-edit'></i>&nbsp;ADD NEW
               </a>
               
     </table>
     <h2 style={{color:"#640C0F"}}>SPORT LRADER LIST.</h2>
     <hr></hr>


     <table className='table,event'>
       <thead className='th'>
         <tr>
           <th scope='col'>GAME</th>
           <th scope='col'>CAPTAIN</th>
           
           <th></th>
           </tr>  
        
       </thead>
       {gamecapt && gamecapt.length > 0 && (
         <tbody>
           {gamecapt.map((gamecapt, index) => (
             <tr key={index} className='td'>
               <td className='tabledata'>{gamecapt.game}</td>
               <td className='tabledata'>{gamecapt.capt_Name}</td>
               
               
               <a className='btn btn-warning ' href={`/Leader/${schedule._id}`}>
                <i className='fas fa-edit'></i>&nbsp;Edit
               </a>
               <a className='btn btn-danger buttonedt' href="#" onClick={()=>onDeletecapt(gamecapt._id)}>
                <i className='fas fa-trash'></i>&nbsp;Delete
               </a>             </tr>
            ))}
         </tbody>
          
       )}
       <a className='btn btn-warning'  href="#" onClick={()=>{navigate("/Addcapt") }} >
                <i className='fas fa-edit'></i>&nbsp;ADD NEW
               </a>
               
     </table>
     
     <hr></hr>


     <h2 style={{color:"#640C0F"}}>SCHOOL ACHIVEMENTS.</h2>
     <hr></hr>

     <table className='table,event'>
       <thead className='th'>
         <tr>
           <th scope='col'>GAME EVENT</th>
           <th scope='col'>ACHIVEMRNT</th>
           
           <th></th>
           </tr>  
        
       </thead>
       {achive && achive.length > 0 && (
         <tbody>
           {achive.map((achive, index) => (
             <tr key={index} className='td'>
               <td className='tabledata'>{achive.gamename}</td>
               <td className='tabledata'>{achive.achive}</td>
               
               
               <a className='btn btn-warning ' href={`/Testschedule/${schedule._id}`}>
                <i className='fas fa-edit'></i>&nbsp;Edit
               </a>
               <a className='btn btn-danger buttonedt' href="#" onClick={()=>onDeleteachive(achive._id)}>
                <i className='fas fa-trash'></i>&nbsp;Delete
               </a>             </tr>
            ))}
         </tbody>
          
       )}
       <a className='btn btn-warning'  href="#" onClick={()=>{navigate("/Addachive") }} >
                <i className='fas fa-edit'></i>&nbsp;ADD NEW
               </a>
               
     </table>
     <hr></hr>

     <button type="submit" className="buttonsubmit" onClick={()=>Navigate(`/`)}>Back</button>
     

</div>
</div>
  );

}
export default Event;

