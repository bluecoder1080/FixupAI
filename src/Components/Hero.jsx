import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-20 xl:px-32 flex items-center justify-center text-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen text-black ">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black mt-44">
          Supercharge Your Creativity with{" "}
          <span className="text-primary">AI Tools</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Write smarter, design faster, and create stunning content — all
          powered by our powerful suite of AI tools.
        </p>
        <button
          onClick={() => navigate("/ai")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-2xl shadow-lg transition duration-300 hover:scale-102"
        >
          Get Started
        </button>
        <div className="flex justify-center mt-0">
          <div className="flex items-center gap-4 text-gray-600">
            <img src={assets.user_group} className="h-8" />
            Trusted by 10k+ People
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Hero;
