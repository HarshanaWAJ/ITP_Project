import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/Tables.css";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

//Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Admindashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/")
      .then((res) => {
        setData(res.data);
        console.log(typeof res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDelete(_id) {
    axios
      .delete(`http://localhost:8080/admin/delete/${_id}`)
      .then((res) => {
        console.log(res);
        alert("Admin deleted successfully");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <Sidebar />
      <div className="container">
        <h3 className="heading">Admin dashboard</h3>
        {Array.isArray(data) && data.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th className="left">Registration ID</th>
                <th className="left">Name</th>
                <th className="left">E-mail</th>
                <th className="left">Gender</th>
                <th className="left">DOB</th>
                <th className="left"></th>
                <th className="left"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.adminId}</td>
                  <td>{item.adminName}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>
                    {new Date(item.DOB).getDate()} -{" "}
                    {new Date(item.DOB).toLocaleString("default", {
                      month: "short",
                    })}{" "}
                    - {new Date(item.DOB).getFullYear()}
                  </td>
                  <td>
                    <Link to={`/updateadmin/${item._id}`}>
                      <button>
                        <EditIcon />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <button onClick={() => handleDelete(item._id)}>
                        <DeleteForeverIcon />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No news available.</p>
        )}
      </div>
    </div>
  );
}

export default Admindashboard;
