import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

//icons
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import HistoryIcon from "@mui/icons-material/History";
import LoginIcon from "@mui/icons-material/Login";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function Navbar() {
  return (
    <div>
      <div className="navbarcontainer">
        <div className="navbar">
          <ul className="navul">
            <li className="navlist">
              <Link className="link" to="/">
                <HomeIcon /> &nbsp; Home
              </Link>
            </li>
            <li className="navlist">
              <Link className="link" to="/news">
                <NewspaperIcon /> &nbsp; News
              </Link>
            </li>
            <li className="navlist">
              <Link className="link" to="/history">
                <HistoryIcon /> &nbsp; History
              </Link>
            </li>
            <li className="leftlist">
              <Link className="link" to="/login">
                <LoginIcon /> &nbsp; Login
              </Link>
            </li>
            <li className="leftlist">
              <Link className="link" to="/HomeBooks">
                <MenuBookIcon /> &nbsp; Library
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
