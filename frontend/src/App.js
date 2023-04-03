import { Route, Routes } from "react-router-dom";
import Form from "./pages/Formpage/Form";
import Frontpage from "./pages/Frontpage/Frontpage";
import Home from "./pages/Home/Home";
import Loginpage from "./pages/login/login";
import Previewpage from "./pages/Previewpage/Preview";
import Signup from "./pages/Signup/Signup";
import Aboutus from "./pages/Aboutus/Aboutus";
import Tos from "./pages/TermsOfServices/termsofservice" 
import Ppage from "./pages/PrivacyPolicy/privacypolicy"
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <div className="App">
        <AnimatedRoutes/>
    </div>
  );
}

export default App;
