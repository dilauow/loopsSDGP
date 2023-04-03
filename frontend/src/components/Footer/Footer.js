import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/Tos")
  }

  function handleclick1() {
    navigate("/")
  }

  function handleclick2() {
    navigate("/prs")
  }

  return (
    <footer className="footer">
      <div className="footer-container">

        <h1 onClick={handleclick1}>HireVision</h1>
        <div className="footer-links">

          <div className='list'>
            <ul className="footer-links-column">
              <li>Home</li>
              <li>Post a Job</li>
            </ul>
          </div>
          <div className='list'>
            <ul className="footer-links-column">
              <li>Employer Sign In</li>
              <li onClick={handleclick}>Terms of Service</li>
              <li onClick={handleclick2}>Privacy Policy</li>
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
