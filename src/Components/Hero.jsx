import Button from "../Reusable/Button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#131313] text-white px-6 text-center pt-24 overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        bg-[size:20px_30px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#FEFDFD_80%,transparent_140%)]">
      </div>

      {/* Content Centered */}
      <div className="relative max-w-3xl w-full px-4 z-10">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight">
          Creative Madness
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-2 sm:mt-3 leading-[1.3] sm:leading-normal">
          Built for bold minds across UI/UX design, product strategy, marketing, 
          and growth. This is where real creators connect, challenge the norm, and 
          elevate their craft.
        </p>

        {/* Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
          <Button to="/join" text="Join the Movement" className="w-full sm:w-auto bg-white text-[#131313] hover:text-white" />
          <Button to="/learn-more" text="Learn More" className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-black" />
        </div>
      </div>
      
            
    </section>
  );
};

export default Hero;
