import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";



function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <div >
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1 className="text-2xl">About</h1>} />
            <Route path="/contact" element={<h1 className="text-2xl">Contact</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
