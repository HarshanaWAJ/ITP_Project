import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

function footer() {
  return (
    <div>
      <hr />
      <span className="footer">
        <span className="footerContainer">
          <p className="contact">
            <span className="contact-header">Contact Us</span>
            <p className="address">
              Kothalawala Maha Vidyalaya,
              <p className="address">
                Kothalawala,
                <p className="address">Kaduwela</p>
              </p>
            </p>
          </p>
        </span>
        <div className="right">
          <div className="link">
            <Link className="Link" to="http://facebook.com/">
              <FacebookIcon /> Facebook
            </Link>
          </div>
          <div className="link">
            <Link className="Link" to="http://twitter.com/">
              <TwitterIcon /> Twitter
            </Link>
          </div>
          <div className="link">
            <Link className="Link" to="http://linkedin.com/">
              <LinkedInIcon /> Linked In
            </Link>
          </div>
          <div className="link">
            <Link className="Link" to="http://gmail.com">
              <EmailIcon /> Email
            </Link>
          </div>
        </div>
      </span>
      <hr />
    </div>
  );
}

export default footer;
