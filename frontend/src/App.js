import { Route, Routes } from "react-router-dom";
import Form from "./pages/Formpage/Form";
import Frontpage from "./pages/Frontpage/Frontpage";
import Home from "./pages/Home/Home";
import Loginpage from "./pages/login/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/frontpage" element={<Frontpage />} />
        <Route path="/formpage" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
