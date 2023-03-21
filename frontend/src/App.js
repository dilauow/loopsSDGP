import { Route, Routes } from "react-router-dom";
import Form from "./pages/Formpage/Form";
import Frontpage from "./pages/Frontpage/Frontpage";
import Home from "./pages/Home/Home";
import Loginpage from "./pages/login/login";
import Previewpage from "./pages/Previewpage/Preview"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Frontpage/>} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/formpage" element={<Form />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/preview" element={<Previewpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
