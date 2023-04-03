import React from 'react'
import {AnimatePresence} from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Form from "./pages/Formpage/Form";
import Frontpage from "./pages/Frontpage/Frontpage";
import Home from "./pages/Home/Home";
import Loginpage from "./pages/login/login";
import Previewpage from "./pages/Previewpage/Preview";
import Signup from "./pages/Signup/Signup";
import Aboutus from "./pages/Aboutus/Aboutus";
import Tos from "./pages/TermsOfServices/termsofservice" 
import Ppage from "./pages/PrivacyPolicy/privacypolicy"
import { Route, Routes } from "react-router-dom";

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Frontpage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/formpage" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/preview" element={<Previewpage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/tos" element={<Tos/>} />
        <Route path="/prs" element={<Ppage/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes