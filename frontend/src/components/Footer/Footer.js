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
          <hr></hr>
          <div className="row">
            {/* Column01 */}
            <div className="col">
              <ul className="ist-unstyled">
                <li>Quick Links</li>
                <br></br>
                <li>Home</li>
                <li>Post a job</li>
                <li>Candidate signin</li>
                <li>Employer signin</li>
              </ul>
            </div>
            {/* Column02 */}
            <div className="col">
              <ul className="ist-unstyled">
                <li>Legal</li>
                <br></br>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>GDPR</li>
              </ul>
            </div>
            {/* Column03 */}
          </div>
        </div>
      </div>
      <h4>Footer!!!</h4>
    </div>
  );
};

export default Footer;
