import React from 'react';
import './Aboutus.css';
import member4 from '../../images/member4.png';
import member1 from '../../images/member1.jpeg';
import member5 from '../../images/member5.jpeg';


function AboutUs() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="team">
        <div className="member">
          <img src={member1} alt="member 1" />
            <div className="overlay">
              <div className="text">
                <h2>Member 1</h2>
                
                <p>Student name - Dilshara Hettiarachchige</p>
                <p>Student Id number - 20200730</p>
              </div>
            </div>
        </div>
        <div className="member">
          <img src={member1} alt="member 1" />
            <div className="overlay">
              <div className="text">
                <h2>Member 1</h2>
                
                <p>Student name - Dilshara Hettiarachchige</p>
                <p>Student Id number - 20200730</p>
              </div>
            </div>
        </div>

        <div className="member">
          <img src={member1} alt="member 1" />
            <div className="overlay">
              <div className="text">
                <h2>Member 1</h2>
                
                <p>Student name - Dilshara Hettiarachchige</p>
                <p>Student Id number - 20200730</p>
              </div>
            </div>
        </div>

         <div className="member">
          <img src={member4} alt="member 4" />
            <div className="overlay">
              <div className="text">
                <h2>Member 1</h2>
                
                <p>Student name - Dilshara Hettiarachchige</p>
                <p>Student Id number - 20200730</p>
              </div>
            </div>
        </div>

        <div className="member">
          <img src={member5} alt="member 5" />
            <div className="overlay">
              <div className="text">
                <h2>Member 1</h2>
                
                <p>Student name - Dilshara Hettiarachchige</p>
                <p>Student Id number - 20200730</p>
              </div>
            </div>
        </div>
          </div>
      </div>
  )   
}

export default AboutUs;
