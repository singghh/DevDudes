import ques from "../assets/devdudesimgs/questionnnn.png";
import { useState } from "react";

function Intro2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 p-6 sm:p-10 max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 mt-10 rounded-lg shadow-2xl animate-gradient-x overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 border-4 border-transparent animate-border-rainbow"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>

      <div className="text-white space-y-6 flex-1 z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold relative pb-4 font-poppins">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 animate-pulse relative inline-block">
            Why DevDudes?
            <span className="absolute inset-0 animate-shine"></span>
          </span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed font-roboto">
          Dev Dudes aims to provide a collaborative environment where developers
          can access top-tier resources, stay updated with the latest tech
          trends, and network with like-minded individuals. Whether you're
          looking to sharpen your coding skills, find inspiration for projects,
          or join a hackathon, Dev Dudes is here to support your journey in
          becoming a better developer.
        </p>
      </div>
      <div className="w-full sm:w-1/2 lg:w-2/5 mt-6 sm:mt-0 z-10">
        <img
          src={ques}
          alt="Why DevDudes"
          className={`w-full h-auto rounded-lg object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "animate-float"
          }`}
        />
      </div>

      {isHovered && (
        <div className="absolute inset-0 bg-white opacity-10 animate-pulse-fast"></div>
      )}
    </div>
  );
}

export default Intro2;
