import React from "react";
import "./rightpane.css";
import { MdOutlineWorkOutline, MdOutlineVerified } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Button from "../Button/Button";
import { BUTTON_TYPES } from "../common/Buttondata";
// import { BUTTON_TYPE } from "./components/common/Buttondata.js";

function Rightpane() {
  return (
    <div className="RightpaneBox">
      RP
      <div className="job-card-container">
        JB-CON
        {/* First Job card */}
        <div className="job-card">
          JB
          <div className="job-card-first-row">
            JB-1-R
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
            <div className="job-card-second-col">
              <Button type={BUTTON_TYPES.PRIMARY} btnText="Apply" />
            </div>
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
        <div className="job-card">
          JB
          <div className="job-card-first-row">
            JB-1-R
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
            <div className="job-card-second-col">
              <Button type={BUTTON_TYPES.PRIMARY} btnText="Apply" />
            </div>
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
        {/* Third Job card */}
        <div className="job-card">
          JB
          <div className="job-card-first-row">
            JB-1-R
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
            <div className="job-card-second-col">
              <Button type={BUTTON_TYPES.PRIMARY} btnText="Apply" />
            </div>
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
        {/* Forth Job card */}
        <div className="job-card">
          JB
          <div className="job-card-first-row">
            JB-1-R
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
            <div className="job-card-second-col">
              <Button type={BUTTON_TYPES.PRIMARY} btnText="Apply" />
            </div>
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
      </div>
    </div>
  );
}

export default Rightpane;
