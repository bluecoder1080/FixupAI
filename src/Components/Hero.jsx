import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden px-4 sm:px-20 xl:px-32">
      {/* Purple Glow on Top Right with Blur */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "#ffffff",
          backgroundImage: `
            radial-gradient(
              circle at top right,
              rgba(173, 109, 244, 0.5),
              transparent 70%
            )
          `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen">
        <div className="max-w-3xl space-y-6 mt-32">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black">
            Supercharge Your Creativity with{" "}
            <span className="text-primary">AI Tools</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Write smarter, design faster, and create stunning content — all
            powered by our powerful suite of AI tools.
          </p>
          <button
            onClick={() => navigate("/ai")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-2xl shadow-lg transition duration-300 hover:scale-105"
          >
            Get Started
          </button>
          <div className="flex justify-center">
            <div className="flex items-center gap-4 text-gray-600">
              <img src={assets.user_group} className="h-8" alt="user-group" />
              Trusted by 10k+ People
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
