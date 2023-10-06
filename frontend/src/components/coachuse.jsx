import React, { useEffect, useState } from 'react';
import "./css/table.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import {  useNavigate} from "react-router-dom";
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';



function Event() {

  const Navigate = useNavigate();
  const [schedule, setschedule] = useState([]);
//******************************************************************* */
const handleDownloadPDF = () => {
  const element = document.getElementById('pdf-content'); // Specify the ID of the element containing the content you want to convert to PDF
  const opt = {
    margin: 0,
    filename: 'webpage.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save();
};



//*************************************************************************
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
 
 return (
   
    <div>
      <div id="pdf-content">
        <h1 style={{color:"#640C0F"}}>THIS MONTH SPORT PRACTICE SCHEDULE.</h1>
     <table className='table,event'>
       <thead className='th'>
          <tr>
           <th scope='col'>DATE</th>
           <th scope='col'>TIME</th>
           <th scope='col'>TEAM</th>
           <th scope='col'>VENUE</th>
          </tr>
       </thead>
       {schedule && schedule.length > 0 && (
         <tbody>
           {schedule.map((schedule, index) => (
             <tr key={index} className='td'>
               <td className='tabledata'>{schedule.day}</td>
               <td className='tabledata'>{schedule.time}</td>
               <td className='tabledata'>{schedule.team}</td>
               <td className='tabledata'>{schedule.venue}</td>
               
               </tr>
            ))}
         </tbody>
          
       )}
       
     </table>
     </div>

     <button type="submit" className="buttonsubmit" onClick={()=>Navigate(`/`)}>Back</button>
    
     <button type="button" className="buttonsubmit" onClick={handleDownloadPDF}>
      Download.
    </button>
    
    </div>
  )
   }

export default Event;