import logo from "./logo.svg";
import "./App.css";
import Landingpage from "./pages/Landingpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          {/* <Route path="/Germay-website/" element={<Landingpage/>}/> */}
        </Routes>
      </Router>
      {/* <Landingpage /> */}
    </div>
  );
}

export default App;
