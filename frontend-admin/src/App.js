import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/HomeAdmin/Home";
import { Route, Routes } from "react-router-dom";
import ApplicantResults from "./pages/ApplicantResults/ApplicantResults";
import ApplicantResultCard from "./components/ApplicantResults/ApplicantResultCard";
import Login from "../src/pages/login/login"
import Tos from "./pages/TermsOfServices/termsofservice"
import Ppage from "./pages/PrivacyPolicy/privacypolicy"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ApplicantResultspage" element={<ApplicantResults />} />
        <Route path="/loginpage" element={<Login/>} />
        <Route path="/tfc" element={<Tos/>} />
        <Route path="/privacy" element={<Ppage/>} />
      </Routes>
    </div>
  );
} 

export default App;
