import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Challenges from "./Pages/Challenges";
// import SpotifyInspiration from "./Components/SpotifyInspiration";
import PastEvents from "./Components/PastEvents";
import GetInTouch from "./Pages/GetInTouch";
import Footer from "./Components/Footer";
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
          <Home />
         <section id="about">
            <About />
          </section>
          <InfiniteScrollStrips />
          <section id="past-events">
            <PastEvents />
          </section>

          <section id="challenges">
            <Challenges />
          </section>
        
          {/* <SpotifyInspiration /> */}
            <GetInTouch />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
