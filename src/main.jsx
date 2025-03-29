import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import "./index.css";
import App from "./App.jsx";

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05, // Smoothness factor, lower value makes it smoother and slower
    });

    const scrollFn = (time) => {
      lenis.raf(time + 100); // Adjust delay (in milliseconds)
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    console.clear();

    // SVG as Data URL
    const svgString = `
      <svg width="1157" height="1009" viewBox="0 0 1157 1009" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M500.168 2.08522C418.155 5.6902 353.49 21.6873 288.376 53.6814C185.634 104.602 104.522 186.39 52.9257 291.385C4.25852 390.296 -11.0626 497.319 7.8635 606.82C33.5489 755.75 131.785 889.585 271.928 965.966L289.277 975.429L295.811 965.74C303.471 954.7 337.043 901.977 397.651 806.22C420.858 769.72 451.501 721.503 465.695 699.197C517.292 618.311 565.959 541.254 572.493 530.214L579.027 518.949L579.703 763.862L580.153 1009H664.194H748.461L749.812 927.437C750.714 882.601 751.39 797.658 751.39 738.627V631.153L665.771 574.15L580.153 517.146L575.196 521.427C569.564 526.384 511.884 579.107 432.575 651.882C403.059 679.145 373.318 706.407 366.784 712.265C352.815 725.108 353.49 725.333 330.734 702.126C310.005 681.173 300.993 669.456 288.376 647.151C248.045 576.628 243.088 493.488 274.632 415.08C296.036 361.456 346.281 306.931 395.849 283.499L410.044 276.739L411.17 340.728L412.297 404.716L494.085 459.241C539.147 489.208 576.323 513.316 576.999 512.865C577.45 512.189 578.576 397.281 579.477 257.137L580.829 2.53585L565.283 1.18398C556.721 0.282737 546.807 -0.167885 542.977 0.0574259C539.372 0.0574259 519.995 0.95867 500.168 2.08522Z" fill="#131313"/>
      </svg>
    `;

    // Encode as Base64
    const svgDataUri = `data:image/svg+xml;base64,${btoa(svgString)}`;

    // Log SVG as an image
    console.log("%c ", `background: url(${svgDataUri}) no-repeat center; background-size: contain; padding: 100px;`);
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
