import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import "./index.css";
import App from "./App.jsx";

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05, // Smoothness factor, lower value makes it smoother and slower
    });

    const scrollFn = (time) => {
      // Add a delay by adjusting the time parameter, this adds a delay to the scroll effect
      lenis.raf(time + 100); // Adjust this 100 to add more delay (in milliseconds)
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    return () => lenis.destroy();
  }, []);

  return children;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScrollWrapper>
      <App />
    </SmoothScrollWrapper>
  </StrictMode>
);
