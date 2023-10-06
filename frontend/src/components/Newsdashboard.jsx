import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/Tables.css";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

//Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Newsdashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/news/")
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
      .delete(`http://localhost:8080/news/delete/${_id}`)
      .then((res) => {
        console.log(res);
        alert("News deleted successfully");
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
        <h3>News Dashboard</h3>
        {Array.isArray(data) && data.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th className="left">Topic</th>
                <th className="left">Description</th>
                <th className="left">Author</th>
                <th className="left"> Published Date</th>
                <th colSpan={2} className="left"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.topic}</td>
                  <td>{item.Description}</td>
                  <td>{item.publishedBy}</td>
                  <td>
                    {new Date(item.pubishedDate).getDate()} -{" "}
                    {new Date(item.pubishedDate).toLocaleString("default", {
                      month: "short",
                    })}{" "}
                    - {new Date(item.pubishedDate).getFullYear()}
                  </td>
                  <td>
                    <Link to={`/updatenews/${item._id}`}>
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

export default Newsdashboard;
