import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Preloader from "./Reusable/Preloader";

function App() {
  const [loading, setLoading] = useState(true); 

  return (
    <div>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <section id="home">
            <Home />
          </section>
         <section id="about">
            <About />
          </section>
            {/*<section id="contact">
            <h1 className="text-2xl">Contact</h1>
          </section> */}
        </>
      )}
    </div>
  );
}

export default App;
