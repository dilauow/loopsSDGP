import React, { useEffect } from "react";
import { BUTTON_TYPES } from "../common/Buttondata";
import "./Jobcard.css";
import { MdOutlineWorkOutline, MdOutlineVerified } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { getJobs } from "../../apiController";
import { useState } from "react";

function Jobcard() {
  const getDBJobs  = async ()=>{
    const temp = await getJobs()
    console.log(temp);
    return temp
   }
   

  let data = [
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

  /* This part use for fetch data*/
  /* const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/my_data')
      .then(response => response.json())
       .then(data => setData(data));

   }, []); */

   
   const [jobs, setJobs ] = useState([])

  

  useEffect (()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getDBJobs().then((jb)=>{
      setJobs(jb)
    })
  
    // setJobs(newJobs)

  },[])

  console.log(jobs);

  const navigate = useNavigate();

  function handleClick(jobtitle) {
    console.log(jobtitle);
    navigate("/formpage");
  }

  const navigate2 = useNavigate();

  function handleClick2() {
    navigate2("/preview");
  }

    return (
      <div>
        {jobs.map((jobs) => (
          <div className="job-card" key={jobs.id}>
            <div className="job-card-first-row">
              <div className="job-card-first-col">
                {/* <div className="job-card-icon">ICON</div> */}
                <div className="job-card-title-company-name">
                  <h2>{jobs.jobrole}</h2>
                  <h3>
                    Surge Global
                    <MdOutlineVerified className="h-icons" />
                  </h3>
                </div>
              </div>
              <div className="job-card-second-col">
                {/* <Button
                  onClick={handleClick}
                  type={BUTTON_TYPES.PRIMARY}
                  btnText="Apply"
                /> */}
                <button
                  className="primaryBtn"
                  onClick={() => handleClick(jobs.jobrole)}
                >
                  APPLY
                </button>
              </div>
            </div>
            <div className="job-card-second-row">
              <h3>
                <MdOutlineWorkOutline className="h-icons" />
                {jobs.fullorparttime}
              </h3>
              <h3>
                <HiOutlineComputerDesktop className="h-icons" />
                {jobs.worktype}
              </h3>
              <h3>
                <TfiLocationPin className="h-icons" />
                {jobs.location}
              </h3>
              <h3>
                <AiOutlineDollarCircle className="h-icons" />
                LKR {jobs.salary}
              </h3>
            </div>
          </div>
        ))
        
        }
      </div>
    );



  
}

export default Jobcard;
