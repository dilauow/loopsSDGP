import React from "react";
import "./rightpane.css";
import { MdOutlineWorkOutline, MdOutlineVerified } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineDollarCircle } from "react-icons/ai";

function Rightpane() {
  return (
    <div className="RightpaneBox">
      <div className="job-card-container">
        {/* First Job card */}
        <div className="job-card">
          <div className="job-card-first-row">
            <div className="job-card-first-col">
              {/* <div className="job-card-icon">ICON</div> */}
              <div className="job-card-title-company-name">
                <h2>Data Science / Data Engineering Internship</h2>
                <h3>
                  Surge Global
                  <MdOutlineVerified className="h-icons" />
                </h3>
              </div>
            </div>
            <div className="job-card-second-col">Button</div>
          </div>
          <div className="job-card-second-row">
            <h3>
              <MdOutlineWorkOutline className="h-icons" />
              Full-Time
            </h3>
            <h3>
              <HiOutlineComputerDesktop className="h-icons" />
              Remote
            </h3>
            <h3>
              <TfiLocationPin className="h-icons" />
              Colombo, Sri Lanka
            </h3>
            <h3>
              <AiOutlineDollarCircle className="h-icons" />
              LKR 100,000
            </h3>
          </div>
        </div>
        {/* Second job card */}
      </div>
    </div>
  );
}

export default Rightpane;
