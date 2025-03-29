import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Challenges from "./Pages/Challenges";
import SpotifyInspiration from "./Components/SpotifyInspiration";
import InfiniteScrollStrips from "./Components/InfiniteScrollStrips";
import Preloader from "./Reusable/Preloader";
import CustomCursor from "./Reusable/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true); 

  return (
    <div>
       <CustomCursor />
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
          <InfiniteScrollStrips />

          <section id="challenges">
            <Challenges />
          </section>

          <SpotifyInspiration />
  
        </>
      )}
    </div>
  );
}

export default App;
