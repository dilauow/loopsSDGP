import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    jobposition: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send form data to server
    fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert(formData);
  };

  return (
    <div className="formfill">
      Form
      <div className="formdiv">
        <h1 className="h1form">APPLY FOR A JOB !</h1>
        <form onSubmit={handleSubmit}>
          <div className="details-div color">
            <label className="labelsform"> Full Name :</label>
            <input className="textareaform1"
              type="text"
              name="fullname"
              value={formData.fullname || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Email :</label>
            <input className="textareaform1"
              type="text"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
            <label className="labelsform" >Address :</label>
            <input className="textareaform1"
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Job Position :</label>
            <input className="textareaform1"
              type="text"
              name="jobposition"
              value={formData.jobposition || ""}
              onChange={handleChange}
            />
          </div>
          <div className="ques-div color">
            <label className="labelsform" >Question 1 : </label>
            <textarea className="textareaform"
              name="question1"
              value={formData.question1 || ""}
              onChange={handleChange}
            />
            <label className="labelsform" >Question 2 : </label>
            <textarea className="textareaform"
              name="question2"
              value={formData.question2 || ""}
              onChange={handleChange}
            />
            <label className="labelsform" >Question 3 : </label>
            <textarea className="textareaform"
              name="question3"
              value={formData.question3 || ""}
              onChange={handleChange}
            />
            <label className="labelsform" >Question 4 : </label>
            <textarea className="textareaform"
              name="question4"
              value={formData.question4 || ""}
              onChange={handleChange}
            />
            <label className="labelsform" >Question 5 : </label>
            <textarea className="textareaform"
              name="question5"
              value={formData.question5 || ""}
              onChange={handleChange}
            />
          </div>
          <button className="btnsubmit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
