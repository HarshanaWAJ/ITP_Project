import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function Testschedule() {

  const Navigate = useNavigate();
  const { id } = useParams();
  const [schedule, setSchedule] = useState({});
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const [team, setTeam] = useState('');
  const [venue, setVenue] = useState('');


  useEffect(() => {
    function fetchSchedule() {
      axios.get(`http://localhost:8070/schedule/get/${id}`)
        .then((res) => {
          setSchedule(res.data[0]); // Note that we're taking the first item from the response array
          console.log(res);  
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
    fetchSchedule();
  }, [id]);

const handleSubmit = (e) => {
    e.preventDefault();

    const updatedSchedule = {
      time: time,
      day: day,
      team: team,
      venue: venue
    };

    axios.put(`http://localhost:8070/schedule/update/${id}`, updatedSchedule)
      .then((res) => {
        console.log(res);
        Navigate('/event'); // Redirect to the desired page after successful update
      })
      .catch((err) => {
        console.error(err.message);
      });
  };


  
  return (
    <div>
      <center>
      <div>
        <h1>Update Schedule</h1>
      </div>

      <form className="formstyle" onSubmit={handleSubmit}> 
      <center>
        <div className="form-group">
          <label htmlFor="time" className="label">TIME</label>
          <input type="text"
           style={{width:"70%"}}
           className="form-control"
           id="time"  
           value={time}
           onChange={(e) => setTime(e.target.value)}
           required />
        </div>

        <div className="form-group">
          <label htmlFor="day" className="label">DAY</label>
          <input type="date"
           style={{width:"70%"}}
           className="form-control"
           id="day"
           value={day}
           onChange={(e) => setDay(e.target.value)}
           required />
        </div>

        <div className="form-group">
          <label htmlFor="team" className="label">TEAM</label>
          <input type="text" 
          style={{width:"70%"}} 
          className="form-control" 
          id="team" 
          value={team}
          onChange={(e) => setTeam(e.target.value)} 
          required />
        </div>

        <div className="form-group">
          <label htmlFor="venue" className="label">VENUE</label>
          <input type="text" 
          style={{width:"70%"}} 
          className="form-control" 
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          required />
        </div>
 
        <div>
          <button type="submit" className="buttonsubmit"  >Update</button>
          <button type="button" className="buttonsubmit"  onClick={()=>Navigate(`/event`)} >Back</button>
        </div>
        </center>
      </form>
      </center> 
    </div>
  )
}

export default Testschedule;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate,useParams } from "react-router-dom";


// function Testschedule() {

//     const [schedule, setschedule] = useState([]);

//     useEffect(() => {
//       function allschedule() {
//         axios.get('http://localhost:8070/schedule/get/')
//           .then((res) => {
//             setschedule(res.data); // Note that the data is stored in `res.data`, not `res.applications`
//             console.log(res);  
//           })
//           .catch((err) => {
//             alert(err.message);
//           });
//       }
//       allschedule();
//     }, []);




//   return (
//     <div>
//       <div>
//         <h1>update ok</h1>
//       </div>

//  <form className="formstyle"   >
     
// <div className="form-group" >
//   <label for="exampleInputEmail1" className="label">TIME</label>
//   <input type="text" style={{width:"70%"}} className="form-control" id="Name"  aria-describedby="emailHelp"  required="true" 
//    />
  
// </div>
// <div className="form-group">
//   <label for="exampleInputEmail1"className="label">DAY</label>
//   <input type="text" style={{width:"70%"}} className="form-control" id="IndexNumber" aria-describedby="emailHelp"  required="true"
//   ></input>
  
// </div>
// <div className="form-group">
//   <label for="exampleInputEmail1"className="label">TEAM</label>
//   <input type="text" style={{width:"70%"}} className="form-control" id="IndexNumber" aria-describedby="emailHelp"  required="true" 
//  ></input>
  
// </div>
// <div className="form-group">
//   <label for="exampleInputEmail1" className="label">VENUE</label>
//   <input type="text" style={{width:"70%"}} className="form-control" id="Gread" aria-describedby="emailHelp"  required="true" 
//  ></input>
  
// </div>
 
// <div>
// <button type="submit" className="buttonsubmit" >Submit</button>
// <button type="button" className="buttonsubmit"  >Back</button>
// </div>

// </form> 
//     </div>
//   )
// } 

// export default Testschedule;
