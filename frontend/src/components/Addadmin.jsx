import { useState } from "react";
import React from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function Addadmin() {
  const [adminId, setAdminID] = useState("");
  const [adminName, setAdminName] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  function handleNICChange(e) {
    const nicNumber = e.target.value;
    const lastFourDigits = nicNumber.substring(nicNumber.length - 5);
    const newAdminID = "ADM" + lastFourDigits;
    setAdminID(newAdminID);
  }

  function sendData(e) {
    e.preventDefault();
    const newAdmin = {
      adminId,
      adminName,
      DOB,
      email,
      gender,
      password,
    };
    console.log(newAdmin);
    axios
      .post("http://localhost:8080/admin/add", newAdmin)
      .then(() => {
        alert("Admin Added!");
        window.location.reload(false);
      })
      .catch((err) => {
        alert("Error: " + err);
      });
  }

  return (
    <div>
      <Sidebar />
      <div className="container" style={{ background: "#F1CF3D" }}>
        <h3>
          <center>Admin Registration</center>
        </h3>
        <form onSubmit={sendData}>
          <div class="form-group">
            <label for="nicNumber">NIC: </label>
            <input
              type="text"
              class="form-control"
              id="nicNumber"
              pattern="^\d{9}(\d|V)|\d{12}$"
              required
              aria-describedby="emailHelp"
              onChange={handleNICChange}
            />

            <label for="adminId">Admin ID: </label>
            <input
              type="text"
              class="form-control"
              id="adminId"
              disabled="true"
              value={adminId}
              required
              aria-describedby="emailHelp"
              onChange={(e) => {
                setAdminID(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Admin Name: </label>
            <input
              type="text"
              class="form-control"
              id="adminName"
              required
              aria-describedby="emailHelp"
              onChange={(e) => {
                setAdminName(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Date of Birth: </label>
            <input
              type="date"
              class="form-control"
              id="DOB"
              required
              aria-describedby="emailHelp"
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email ID: </label>
            <input
              type="email"
              class="form-control"
              id="email"
              required
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Gender: </label>
            <br />
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            Male &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />{" "}
            Female
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Password: </label>
            <input
              type="password"
              class="form-control"
              id="password"
              required
              aria-describedby="emailHelp"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addadmin;
