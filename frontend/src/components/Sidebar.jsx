import React from "react";
import "./css/Sidebar.css";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <a href="/">Home</a>
        <a href="/Newsdashboard">News Dashboard</a>
        <a href="/addminDashboard">Admin Dashboard</a>

        <ul>
          <li>
            <a href="#">
              Operations
              <ArrowDropDownIcon />
            </a>
            <ul>
              <li>
                <a href="/addNews">Add News</a>
              </li>
              <li>
                <a href="/addAdmins">Register Admin </a>
              </li>
              <li>
                <a href="/timetable">Schedule Timetable</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
