import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const user = useUser;
  return (
    <div className="px-4 sm:px-20 xl:px-30 my-24">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold ">
          Powerful AI Tools
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-10">
        {AiToolsData.map((tools, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tools.path)}
            className="group cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 text-gray-100"
              style={{
                background: `linear-gradient(to bottom, ${tools.bg.from}, ${tools.bg.to})`,
              }}
            >
              <tools.Icon className="text-white text-2xl" />
            </div>

            <h3 className="text-lg font-semibold text-gray-700  mb-2 group-hover:text-primary">
              {tools.title}
            </h3>

            <p className="text-sm text-gray-600 max-w-[95%]">
              {tools.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
