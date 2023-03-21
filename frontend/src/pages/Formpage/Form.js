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
    <div>
      Form
      <div className="formdiv">
        <h1>Apply for Job !</h1>
        <form onSubmit={handleSubmit}>
          <div className="details-div div">
            <label> Full Name :</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname || ""}
              onChange={handleChange}
            />
            <label>Email :</label>
            <input
              type="text"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
            <label>Address :</label>
            <input
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
            />
            <label>Job Position :</label>
            <input
              type="text"
              name="jobposition"
              value={formData.jobposition || ""}
              onChange={handleChange}
            />
          </div>
          <div className="ques-div div">
            <label>Question 1 : </label>
            <textarea
              name="question1"
              value={formData.question1 || ""}
              onChange={handleChange}
            />
            <label>Question 2 : </label>
            <textarea
              name="question2"
              value={formData.question2 || ""}
              onChange={handleChange}
            />
            <label>Question 3 : </label>
            <textarea
              name="question3"
              value={formData.question3 || ""}
              onChange={handleChange}
            />
            <label>Question 4 : </label>
            <textarea
              name="question4"
              value={formData.question4 || ""}
              onChange={handleChange}
            />
            <label>Question 5 : </label>
            <textarea
              name="question5"
              value={formData.question5 || ""}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
