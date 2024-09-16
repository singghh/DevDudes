import React, { useState } from "react";
import What from "../assets/devdudesimgs/whatis.gif";

function Intro() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 pt-20 pb-20 pl-12 pr-12 max-w-6xl mx-auto flex flex-row-reverse md:mt-20 rounded-lg items-center flex-wrap sm:flex-nowrap gap-y-5 mt-0 shadow-lg animate-gradient-x border border-opacity-30 border-blue-300 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-white ">
        {/* <p className='md:text-4xl  text-2xl pb-3 font-semibold'>What is DevDudes?</p> */}
        <h1 className="text-5xl font-extrabold text-yellow-400 relative pb-4">
          What is DevDudes?
          <span className="absolute inset-0 filter blur-lg opacity-30 text-yellow-300 -z-10">
            What is DevDudes?
          </span>
        </h1>

        <p className="text-xs md:text-sm lg:text-xl">
          Dev Dudes is a thriving community dedicated to MERN stack development,
          created for developers of all levels who are passionate about
          learning, sharing, and growing their skills. Our platform offers a
          wealth of resources, including curated roadmaps, essential learning
          materials, YouTube tutorials, hackathons, webinars, and idea
          implementation guides, all designed to help you master the MERN stack
          and beyond.
        </p>
      </div>
      <div className="lg:w-[2000px]">
        <img src={What} alt="" />
      </div>
    </div>
  );
}

export default Intro;
