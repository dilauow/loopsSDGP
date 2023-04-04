import React, { useState } from "react";
import "./Form.css";
import { createApplication } from "../../apiController";
import { animate, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

function Form() {
  const location = useLocation();

  const formJobPosition = location.state;

  const [formData, setFormData] = useState({
    id: 0,
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
      id: Math.floor(Math.random() * 10000),
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
    <motion.div
      className="formfill"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
            <label className="labelsform">
              Job Position : <span>{formJobPosition}</span>
            </label>
            <input
              className="textareaform1"
              type="text"
              name="jobposition"
              value={formData.position || ""}
              onChange={handleChange}
            />
          </div>
          <div className="ques-div color">
            <label className="labelsform">
              1 : How do you stay open-minded when dealing with people from
              different backgrounds or cultures than your own ?{" "}
            </label>
            <textarea
              className="textareaform"
              name="question1"
              value={formData.question1 || ""}
              onChange={handleChange}
            />
            <label className="labelsform">
              2 : How do you typically plan and organize your work? Can you give
              an example of how this has helped you achieve a specific goal ?
            </label>
            <textarea
              className="textareaform"
              name="question2"
              value={formData.question2 || ""}
              onChange={handleChange}
            />
            <label className="labelsform">
              3 : Can you tell me about a time when you had to work in a team?
              How did you contribute to the team's success?
            </label>
            <textarea
              className="textareaform"
              name="question3"
              value={formData.question3 || ""}
              onChange={handleChange}
            />
            <label className="labelsform">
              4 : If you are supposed to work on a project that's out of your
              comfortable zone. Would you adapt or not. Give reasons for yes or
              no
            </label>
            <textarea
              className="textareaform"
              name="question4"
              value={formData.question4 || ""}
              onChange={handleChange}
            />
            <label className="labelsform">
              5 : Tell me about a time when you had to work with someone who had
              a very different personality or work style than your own. How did
              you handle the situation ?
            </label>
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
    </motion.div>
  );
}

export default Form;
