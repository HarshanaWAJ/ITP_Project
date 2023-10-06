import React ,{ useEffect, useState } from "react";
import "./css/sport.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Sport() {

  const [gamecapt, setdata] = useState([]);

  useEffect(() => {
    function allcaptains() {
      axios.get('http://localhost:8070/coachuse')
        .then((res) => {
          setdata(res.data); 
          console.log(res);  
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    allcaptains();
  }, []);

  const [achive, setachive] = useState([]);

  useEffect(() => {
    function allachive() {
      axios.get('http://localhost:8070/achive')
        .then((res) => {
          setachive(res.data); 
          console.log(res);  
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    allachive();
  }, []);
  
  const navigate = useNavigate();
  
    return (
      
    <div>
      <div>

      <img src="../images/sport2.jpg" className= "imgs" alt="logo" />

      </div>

      <div className="divclz">
      <img src="../images/atheletic.jpg" className= "icon" alt="atheletic" />
      <img src="../images/vallyball2.jpg" className= "icon" alt="vallyball" />
      <img src="../images/cricket.jpg" className= "icon" alt="logo" />
      <img src="../images/karate.jpg" className= "icon" alt="logo" />
      <img src="../images/netball.jpg" className= "icon" alt="logo" />
      <img src="../images/chess.jpg" className= "icon" alt="logo" />
      </div>
<hr></hr>
     <div className="divclz2">
        <h3 style={{color:"#640C0F"}}>Game captains :-</h3> 

        <div>
     <table className="table, event" style={{width:"80%",alignItems:"center"}}>
       <thead className='th'>
         <tr>
           <th scope='col' className="td">GAME</th>
           <th scope='col' className="td">CAPTAIN NAME</th>
           
         </tr>
       </thead>
       {gamecapt && gamecapt.length > 0 && (
         <tbody>
           {gamecapt.map((gamecapt, index) => (
             <tr key={index}>
               <td className='td'>#  {gamecapt.game}</td>
               <td className='td'>{gamecapt.capt_Name}</td>
               
             </tr>
           ))}
         </tbody>
       )}
     </table>
     </div>

     </div >
          
        <div className="divclz3">
        <img src="../images/achivements.jpg" className= "achiveicon" alt="achive" />
        <label className="label2">OUR ACHIVEMENTS -:</label> <br/>
        <div>

        <table className='table,event' style={{width:"90%"}}>
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
               <td className='tabledata'  style={{paddingLeft:"15PX"} } >#...{achive.gamename}</td>
               <td className='tabledata'>{achive.achive}</td>
               
            
               </tr>
            ))}
         </tbody>
          
       )}
       
     </table>
         
     
     </div>
         
        <div style={{ backgroundColor:"aquamarine"}}>
          <button className="button"  onClick={()=>{navigate("/") }}>back</button>
          <button className="button"  onClick={()=>{navigate("/apply") }} >Apply</button>
        
        </div>
      
        </div>
      </div>
      )

  }
  
  
  export default Sport;