import React from 'react'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomeAdmin/Home";
import ApplicantResults from "./pages/ApplicantResults/ApplicantResults";
import ApplicantResultCard from "./components/ApplicantResults/ApplicantResultCard";
import Login from "../src/pages/login/login"
import Tos from "./pages/TermsOfServices/termsofservice"
import Ppage from "./pages/PrivacyPolicy/privacypolicy"
import {AnimatePresence} from 'framer-motion'


function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/ApplicantResultspage" element={<ApplicantResults />} />
            <Route path="/loginpage" element={<Login/>} />
            <Route path="/tfc" element={<Tos/>} />
            <Route path="/privacy" element={<Ppage/>} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes