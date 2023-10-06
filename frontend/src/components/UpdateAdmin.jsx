import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";

function FormInput({ label, type, id, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}: </label>
      <input
        type={type}
        className="form-control"
        id={id}
        required
        aria-describedby="emailHelp"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function UpdateAdmin() {
  const { id } = useParams();
  const [adminID, setAdminID] = useState("");
  const [adminName, setAdminName] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/admin/get/${id}`).then((res) => {
      const Admin = res.data;
      setAdminID(Admin.adminId);
      setAdminName(Admin.adminName);
      setDOB(Admin.DOB);
      setEmail(Admin.email);
      setGender(Admin.gender);
      setPassword(Admin.password);
    });
  }, [id]);

  async function updateData(e) {
    e.preventDefault();
    const updateAdmin = {
      adminId: adminID,
      adminName,
      DOB,
      email,
      gender,
      password,
    };
    try {
      await axios.put(`http://localhost:8080/admin/update/${id}`, updateAdmin);
      alert("Admin updated successfully!");
      console.log(updateAdmin);
    } catch (error) {
      console.log(error);
      alert("Error with updating news.");
    }
  }

  function handleNICChange(e) {
    const nicNumber = e.target.value;
    const lastFourDigits = nicNumber.substring(nicNumber.length - 5);
    const newAdminID = "ADM" + lastFourDigits;
    setAdminID(newAdminID);
  }

  return (
    <div>
      <Sidebar />
      <div className="container" style={{ background: "#F1CF3D" }}>
        <h3>
          <center>Update Admin Details</center>
        </h3>
        <form onSubmit={updateData}>
          <label htmlFor="nic">NIC:</label>
          <input
            type="text"
            className="form-control"
            id="nic"
            required
            aria-describedby="emailHelp"
            onChange={handleNICChange}
          />
          <label htmlFor="adminId">Admin ID:</label>
          <input
            className="form-control"
            pattern="^(19|20)\d{2}(0|1)\d{4}[0-9Vv]$"
            type="text"
            id="adminId"
            readOnly={true}
            value={adminID}
            onChange={(e) => setAdminID(e.target.value)}
          />
          <FormInput
            label="Admin Name"
            type="text"
            id="adminName"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
          <FormInput
            label="Date of Birth"
            type="date"
            id="DOB"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
          />
          <FormInput
            label="Email ID"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-group">
            <label htmlFor="gender">Gender: </label>
            <br />
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            />
            Male &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Female
          </div>
          <FormInput
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateAdmin;
