import React, { useState } from "react";
import "./login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the code to submit the form data to your backend API
  };

  const navigate = useNavigate();

    function handleclick(){
        navigate("/")
    }

  return (
    <motion.div className="bg" initial={{width:0}} animate={{width:"100%"}} exit={{x:"100%"}}>
      <form className="form1" onSubmit={signIn}>
        <h1 className="h1login">LogIn to Hire Vision</h1>
        <div>
          <input
            className="inputlogin"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="inputlogin"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="buttonsignup" type="submit">
          Log-In
        </button>
        <button className="buttonhome" type="submit" onClick={handleclick}>
          HOME
        </button>
      </form>
    </motion.div>
  );
};

export default Login;
