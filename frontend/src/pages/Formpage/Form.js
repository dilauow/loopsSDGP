import React, { useState } from "react";
import "./Form.css";
import { createApplication } from "../../apiController";

function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    position: "",
    cv: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fullAnswer = [
      formData.question1 +
        ". " +
        formData.question2 +
        ". " +
        formData.question3 +
        ". " +
        formData.question4 +
        ". " +
        formData.question5,
    ];
    console.log(fullAnswer);
    const FormSendDataModel = {
      name: formData.fullname,
      address: formData.address,
      position: formData.position,
      cv: formData.cv,
      answers: fullAnswer,
      prediction: [0],
    };
    console.log(FormSendDataModel);

    await createApplication(FormSendDataModel);
  };

  return (
    <div className="formfill">
      <div className="formdiv">
        <h1 className="h1form">APPLY FOR A JOB !</h1>
        <form onSubmit={handleSubmit}>
          <div className="details-div color">
            <label className="labelsform"> Full Name :</label>
            <input
              className="textareaform1"
              type="text"
              name="fullname"
              value={formData.fullname || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Email :</label>
            <input
              className="textareaform1"
              type="text"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Address :</label>
            <input
              className="textareaform1"
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Job Position :</label>
            <input
              className="textareaform1"
              type="text"
              name="jobposition"
              value={formData.jobposition || ""}
              onChange={handleChange}
            />
          </div>
          <div className="ques-div color">
            <label className="labelsform">Question 1 : </label>
            <textarea
              className="textareaform"
              name="question1"
              value={formData.question1 || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Question 2 : </label>
            <textarea
              className="textareaform"
              name="question2"
              value={formData.question2 || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Question 3 : </label>
            <textarea
              className="textareaform"
              name="question3"
              value={formData.question3 || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Question 4 : </label>
            <textarea
              className="textareaform"
              name="question4"
              value={formData.question4 || ""}
              onChange={handleChange}
            />
            <label className="labelsform">Question 5 : </label>
            <textarea
              className="textareaform"
              name="question5"
              value={formData.question5 || ""}
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
    </div>
  );
}

export default Form;
