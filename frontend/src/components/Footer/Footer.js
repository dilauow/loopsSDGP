import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <h1>HireVision</h1>
        <div className="footer-links">
          
          <div className='list'>
            <ul className="footer-links-column">
              <li>Home</li>
              <li>Post a Job</li>
              <li>Candidate Sign In</li>
            </ul>
          </div>
          <div className='list'>
            <ul className="footer-links-column">
              <li>Employer Sign In</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>GDPR Fields</li>
            </ul>
          </div>
        </div>
        <p className="footer-copyright">
          &copy;{new Date().getFullYear()} HireVision | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
