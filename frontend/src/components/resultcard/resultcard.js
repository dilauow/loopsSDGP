import React from 'react'
import { BUTTON_TYPES } from "../common/Buttondata";
import "./resultcard.css";
import { MdOutlineWorkOutline, MdOutlineVerified } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function resultcard() {
    const data = [
        {
          id: 1,
          jobtitle: "Data Engineering",
          jobtime: "Full-Time",
          jobMethod: "Remote",
          joblocation: "Colombo",
          jobsalary: 100000,
        },
        {
          id: 2,
          jobtitle: "Software Engineering",
          jobtime: "Part-Time",
          jobMethod: "Hybrid",
          joblocation: "Colombo 7",
          jobsalary: 200000,
        },
        {
          id: 3,
          jobtitle: "Machine Learning Engineering",
          jobtime: "Full-Time",
          jobMethod: "Remote",
          joblocation: "Colombo 4",
          jobsalary: 500000,
        },
      ];
      
  return (
    <div>resultcard</div>
  )
}
