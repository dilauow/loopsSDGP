import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Loginpage from "./pages/login/login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginpage" element={<Loginpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
