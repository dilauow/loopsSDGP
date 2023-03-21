import React from 'react'
import "./preview.css"

export default function Preview() {
  return (
    <div>
      <h1>Final Result</h1>
      <hr></hr>
      <div>
        <div class="col-3">
          <i class="fa fa-quote-left"></i>
        </div>
        <table align='"center' cellpadding="10px" width="600px">
          <tr>
            <td>
              <h3> Personal Details</h3>
            </td>
          </tr>
        </table>
        <table align='center' cellpadding="10px" width="600px">
          <tr>
            <td>Name : </td>
          </tr>
          <tr>
            <td>Age : </td>
          </tr>
          <tr>
            <td>Email :</td>
          </tr>
          <tr>
            <td>Phone number :</td>
          </tr>
        </table>
        <table align="center" cellPadding="10px" width="600px">
          <tr>
            <td>
              <h3> Personality Traits Result</h3>
            </td>
          </tr>
        </table>
        <table align="center" cellpadding="10px" width="600px">
	<tr>
			<td>1 Openness =</td>
			<td>%</td>
		</tr>
		<tr>
			<td>2 Conscientiousness =</td>
			<td>%</td>
		</tr>
		<tr>
			<td>3 Extraversion =</td>
			<td>%</td>
		</tr>
		<tr>
			<td>4 Agreeableness =</td>
			<td>%</td>
		</tr>
		<tr>
			<td>5 Neuroticism =</td>
			<td>%</td>
		</tr>
    </table>
      </div>
    </div> 
  )
}
