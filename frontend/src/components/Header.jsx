import React from "react";
import "./css/Header.css";

function header() {
  return (
    <div>
      <hr />
      <div className="header">
        <div className="item-img">
          <img src="/logo.png" alt="logo" />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="item">
          <h2>Kothalawala Maha Vidyalaya</h2>
          <center>
            <h4>Penvamu Nawa Man - Nanwamu Jaya Tam</h4>
          </center>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default header;
