import React from 'react';
import './Aboutus.css';
import member4 from '../../images/member4.png';
import member1 from '../../images/member1.jpeg';
import member5 from '../../images/member5.jpeg';
import member2 from '../../images/member2.jpeg';
import member3 from '../../images/member3.jpeg';
import { animate, motion } from "framer-motion";


function AboutUs() {
  return (
    <motion.div className="container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <h1>ABOUT US</h1>
      <div className="team">
        <div className="member">
          <img src={member1} alt="member 1" />
            <div className="overlay">
              <div className="text">
                <h2>Member 1</h2>
                
                <p>Student name - Dilshara Hettiarachchige</p>
                <p>Student Id number - 20210305</p>
              </div>
            </div>
        </div>
        <div className="member">
          <img src={member2} alt="member 1" />
            <div className="overlay">
              <div className="text">
                <h2>Member 2</h2>
                
                <p>Student name - Sithum Wikramanayaka</p>
                <p>Student Id number - 20210799</p>
              </div>
            </div>
        </div>

        <div className="member">
          <img src={member3} alt="member 1" />
            <div className="overlay">
              <div className="text">
                <h2>Member 3</h2>
                
                <p>Student name - Diman Randisa</p>
                <p>Student Id number - 20200719</p>
              </div>
            </div>
        </div>

         <div className="member">
          <img src={member4} alt="member 4" />
            <div className="overlay">
              <div className="text">
                <h2>Member 4</h2>
                
                <p>Student name - Thilini Abeywikrama</p>
                <p>Student Id number - 20200476</p>
              </div>
            </div>
        </div>

        <div className="member">
          <img src={member5} alt="member 5" />
            <div className="overlay">
              <div className="text">
                <h2>Member 5</h2>
                
                <p>Student name - Sahasri Kaluthota</p>
                <p>Student Id number - 20210523</p>
              </div>
            </div>
        </div>
          </div>
      </motion.div>
  )   
}

export default AboutUs;
