import React from 'react'
import "./preview.css"
import NavBar from "../../components/Navigation/NavBar"

export default function Preview() {
  return (
    <div>
    <NavBar/>
    <h1 className='head'>Final Result</h1>
    <hr></hr>
    <br></br>
    <div class = "table">
    <h3 className='head1'> Personal Details</h3>
    </div>
    <br></br>
    
    <div class = "details">
      <h4 className='head4'> Name = </h4>
      <br></br>
      <h4 className='head4'> Age = </h4>
      <br></br>
      <h4 className='head4'> Email =</h4>
      <br></br>
      <h4 className='head4'> Phone Number =</h4>
    </div>

    <br></br>
    <h3 className='head2'> Personality Traits Result</h3>
    <hr></hr>
    <br></br>
  <div>
    <br></br>
    <h4 className='head3'> 1 Openness = </h4>
    <br></br>
    <h4 className='head3'> 2 Conscientiousness = </h4>
    <br></br>
    <h4 className='head3'> 3 Extraversion =</h4>
    <br></br>
    <h4 className='head3'> 4 Agreeableness =</h4>
    <br></br>
    <h4 className='head3'> 5 Neuroticism =</h4>
  </div>
</div>
  );
}
