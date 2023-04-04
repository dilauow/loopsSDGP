import React, { useState } from "react";
import "./Jobpostpage.css";
import { animate, motion } from "framer-motion";
import { createJob } from "../../controllers/applicationController";

function Jobpostpage() {
  const [postJobData, setPostJobData] = useState({
    jobrole: "",
    company: "",
    location: "",
    worktype: "",
    fullorparttime: "",
    salary: "",
  });

  const handleChange = (event) => {
    setPostJobData({ ...postJobData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const PostSendDataModel = {
      jobrole: postJobData.jobrole,
      company: postJobData.company,
      location: postJobData.location,
      worktype: postJobData.worktype,
      fullorparttime: postJobData.fullorparttime,
      salary: postJobData.salary,
    };

    console.log(PostSendDataModel);

    await createJob(PostSendDataModel);
  };
  return (
    <motion.div
      className="formfill"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="formdiv">
        <span>
          <h1 className="h1form">POST A JOB</h1>
        </span>
        <form onSubmit={handleSubmit}>
          <div className="details-div color">
            <label className="labelsform"> Job Role :</label>
            <input
              className="textareaform1"
              type="text"
              name="jobrole"
              value={postJobData.jobrole || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Company Name :</label>
            <input
              className="textareaform1"
              type="text"
              name="company"
              value={postJobData.company || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Location :</label>
            <input
              className="textareaform1"
              type="text"
              name="location"
              value={postJobData.location || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Work Type :</label>
            <input
              className="textareaform1"
              type="text"
              name="worktype"
              // value={formData.position || ""}
              value={postJobData.worktype}
              onChange={handleChange}
            />
          </div>
          <div className="ques-div color">
            <label className="labelsform">Full or Part time :</label>
            <input
              className="textareaform"
              name="fullorparttime"
              value={postJobData.fullorparttime || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Salary :</label>
            <input
              className="textareaform"
              name="salary"
              value={postJobData.salary || ""}
              onChange={handleChange}
            />
          </div>
          <div className="btnsbmit1">
            <button className="btnsubmit" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Jobpostpage;
