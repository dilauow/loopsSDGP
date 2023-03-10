import { Route, Routes } from "react-router-dom";
import Frontpage from "./pages/Frontpage/Frontpage";
import Home from "./pages/Home/Home";
import Loginpage from "./pages/login/login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/loginpage" element={<Loginpage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
