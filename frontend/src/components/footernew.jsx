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
        <div className="right">
          <div className="link">
            <FacebookIcon />
            <Link className="Link" to="http://facebook.com/">
              Facebook
            </Link>
            <br />
          </div>
          <div className="link">
            <TwitterIcon />
            <Link className="Link" to="http://twitter.com/">
              Twitter
            </Link>
            <br />
          </div>
          <div className="link">
            <LinkedInIcon />
            <Link className="Link" to="http://linkedin.com/">
              LinkedIn
            </Link>
            <br />
          </div>
          <div className="link">
            <EmailIcon />
            <Link className="Link" to="http://gmail.com">
              Email
            </Link>
            <br />
          </div>
        </div>
      </span>
      <hr />
    </div>
  );
}

export default footer;
