import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import './events.css'

const ViewEvents = () => {

  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  function getData() {
    axios.get("http://localhost:8080/event/")
      .then((res) => {
        console.log(res.data);
        setData(res.data)

      });
  }


  function handleDelete(id) {
    axios
      .delete(`http://localhost:8080/event/delete/${id}`)
      .then(() => {
        alert("Event Deleted");
        getData();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const setToLocalStorage = (id, Event_Name, Event_Location, Event_Handler,Event_Image) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Event_Name", Event_Name);
    localStorage.setItem("Event_Location", Event_Location);
    localStorage.setItem("Event_Handler", Event_Handler);
    localStorage.setItem("Event_Image", Event_Image);
  }

  useEffect(() => {
    getData();
  }, []);



  const componentRef = useRef(null);

  return (<>
    <div className="d-flex flex-direction-column justify-content-between m-2" style={{background:'gray',padding:'10px'}}>
    <Link to="/expenses">
        <button className="btn btn-primary"> Back</button>
      </Link>
      <h2>Event Details </h2>
      {/*<div class="mb-3">
      <input type="month" max="2023-05" placeholder="search here" class="form-control" onChange={inputHandler}/>
    </div>*/}
      <ReactToPrint
        trigger={() => (
          <button
            type="button"
            className="btn btn-dark"
            style={{ float: "right", marginLeft: '900px' }}
          >
            <i className="fas fa-print mr-2"></i>Generate Report
          </button>
        )}
        content={() => componentRef.current} // return the current value of the reference
      />

    </div>
    <div hidden>
      <table class="table" >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Event_Name</th>
            <th scope="col">Event_Location</th>
            <th scope="col">Event_Handler</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.filter((el) => {
          if (el === "") {
            return el;
          } else {
            return el.Event_Name.toLowerCase().includes(inputText) ||
              el.Event_Location.toLowerCase().includes(inputText);
          }
        })
          .map((eachData) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.Event_Name}</td>
                  <td>{eachData.Event_Location}</td>
                  <td>{eachData.Event_Handler}</td>
                  <td>
                    <Link to="/updatevent">
                      <button className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData._id,
                            eachData.Event_Name,
                            eachData.Event_Location,
                            eachData.Event_Handler
                          )
                        }
                      >Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>

              </tbody>

            )
          })}

      </table>
    </div>

    <div hidden>
      <table class="table" ref={componentRef}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Event_Name</th>
            <th scope="col">Event_Location</th>
            <th scope="col">Event_Handler</th>
          </tr>
        </thead>
        {data.filter((el) => {
          if (el === "") {
            return el;
          } else {
            return el.Event_Name.toLowerCase().includes(inputText) ||
              el.Event_Location.toLowerCase().includes(inputText);
          }
        })
          .map((eachData) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.Event_Name}</td>
                  <td>{eachData.Event_Location}</td>
                  <td>{eachData.Event_Handler}</td>
                </tr>

              </tbody>

            )
          })}

      </table>
    </div>


    <div class="container mt-5">

      <div class="row">
        {data.filter((el) => {
          if (el === "") {
            return el;
          } else {
            return el.Event_Name.toLowerCase().includes(inputText) ||
              el.Event_Location.toLowerCase().includes(inputText);
          }
        })
          .map((eachData) => {
            return (
              <div class="col-md-3 col-sm-6   mb-5">
                <div class="card cardeventview card-block cardhver">

                  <img src={eachData.Event_Image}
                   alt="Photo of event" className="imgeventview"/>
                  <h5 class="card-title card-titleeventview mt-3 mb-3" style={{ padding: '10px',fontSize:'18px',height:'50px'}}>Event Name:- {eachData.Event_Name}</h5>
                  <p class="card-text" style={{ padding: '10px',height:'50px' }}>Event Location:- {eachData.Event_Location}</p>
                  <p class="card-text" style={{ padding: '10px' ,height:'60px'}}>Event Handler:-{eachData.Event_Handler}</p>
                  <div class="col-md-12">
                    <button className="btn btn-info mr-2">View</button>
                    <Link to="/updatevent">
                    <button className="btn btn-warning mr-2"  onClick={() =>
                          setToLocalStorage(
                            eachData._id,
                            eachData.Event_Name,
                            eachData.Event_Location,
                            eachData.Event_Handler,
                            eachData.Event_Image
                          )
                        }>Edit</button></Link>
                    <button className="btn btn-danger mr-2"   onClick={() => handleDelete(eachData._id)}>Delete</button>
                  </div>
                  <br />

                </div>
              </div>
            )
          })}
      </div>

    </div>



  </>)
};
export default ViewEvents;