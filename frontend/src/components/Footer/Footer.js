import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="product-title">
            <h2>HireVision</h2>
          </div>
          <br></br>
          <hr></hr>
          <div className="row">
            {/* Column01 */}
            <div className="col">
              <ul className="list-unstyled">
                <h2>Quick Links</h2>
                <br></br>
                <li>Home</li>
                <li>Post a job</li>
                <li>Candidate signin</li>
                <li>Employer signin</li>
              </ul>
            </div>
            {/* Column02 */}
            <div className="col">
              <ul className="list-unstyled">
                <h2>Legal</h2>
                <br></br>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>GDPR</li>
              </ul>
            </div>
            {/* Column03 */}
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} HireVision | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
