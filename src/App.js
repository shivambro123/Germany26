import logo from "./logo.svg";
import "./App.css";
import Landingpage from "./pages/Landingpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PopUp from "./components/Modal/PopUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          {/* <Route path="/" element={<PopUp />} /> */}
          {/* <Route path="/Germay-website/" element={<Landingpage/>}/> */}
        </Routes>
      </Router>
      {/* <Landingpage /> */}
    </div>
  );
}

export default App;
