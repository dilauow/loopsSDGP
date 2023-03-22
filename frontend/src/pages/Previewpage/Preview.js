import React from 'react'
import "./preview.css"
import NavBar from "../../components/Navigation/NavBar"

export default function Preview() {
  return (
    <div className="mainbody">
      <h1 className="title" align="center">Final Result</h1>
      <hr className="divider" />
      <div className="row">
        <div className="col-3">
          <i className="fa fa-quote-left"></i>
        </div>
      </div>

      <table align="center" cellpadding="10px" width="600px">
        <tr>
          <td> <h3> Personal Details </h3> </td>
        </tr>
      </table>
      <table align="center" cellpadding="10px" width="600px">
        <tr>
          <td>Name :</td>
        </tr>
        <tr>
          <td>Age :</td>
        </tr>
        <tr>
          <td>Email :</td>
        </tr>
        <tr>
          <td>Phone number :</td>
        </tr>
      </table>

      <table align="center" cellpadding="10px" width="600px">
        <tr>
          <td> <h3> Personality Traits Result </h3> </td>
        </tr>
      </table>
      <table align="center" cellpadding="10px" width="600px">
        <tr>
          <td> Openness =</td>
          <td>%</td>
        </tr>
        <tr>
          <td> Conscientiousness =</td>
          <td>%</td>
        </tr>
        <tr>
          <td> Extraversion =</td>
          <td>%</td>
        </tr>
        <tr>
          <td> Agreeableness =</td>
          <td>%</td>
        </tr>
        <tr>
          <td> Neuroticism =</td>
          <td>%</td>
        </tr>
      </table>
    </div>
  );
}
