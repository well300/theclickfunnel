import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div>
          <Routes>
          <Route
              path="/"
              element={
                <div className="relative min-h-screen w-full bg-[#131313]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#FEFDFD_80%,transparent_125%)]"></div>
                <Home />
              </div>
              }
            />
          <Route path="/about" element={<h1 className="text-2xl">About</h1>} />
            <Route path="/contact" element={<h1 className="text-2xl">Contact</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
