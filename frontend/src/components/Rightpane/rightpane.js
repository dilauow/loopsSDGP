import React from "react";
import "./rightpane.css";
import { MdOutlineWorkOutline, MdOutlineVerified } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Button from "../Button/Button";
import { BUTTON_TYPES } from "../common/Buttondata";
import Jobcard from "../Jobcard/Jobcard";
// import { BUTTON_TYPE } from "./components/common/Buttondata.js";

function Rightpane() {
  return (
    <div className="RightpaneBox">
      <div className="job-card-container">
        JB-CON
        <Jobcard />
      </div>
    </div>
  );
}

export default Rightpane;
