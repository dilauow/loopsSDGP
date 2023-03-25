import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/HomeAdmin/Home";
import { Route, Routes } from "react-router-dom";
import ApplicantResults from "./pages/ApplicantResults/ApplicantResults";
import ApplicantResultCard from "./components/ApplicantResults/ApplicantResultCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ApplicantResultspage" element={<ApplicantResults />} />
      </Routes>
    </div>
  );
} 

export default App;
