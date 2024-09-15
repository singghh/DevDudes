// import Devlogo from "../assets/devdudesimgs/offlogo.jpg";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "../Fruitsecommerce/ResponsiveMenu.jsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import dev from "./DevHero.jsx";
function Devnarbar() {
  const [Bool, setBool] = useState(false);
  const navmenu = [
    // {
    //     id:1,
    //     title:"",
    //     link:"/",
    // },
    // {
    //     id:2,
    //     title:"",
    //     link:"https://www.linkedin.com/groups/14515270/",
    // },
    {
      id: 3,
      title: "Join us",
      link: "https://discord.gg/upq7EDUvcX",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center sticky top-0 z-50 overflow-hidden max-w-full p-4 bg-[#090b25]">
        <div className="flex items-center justify-center text-2xl space-x-4">
          <a href="/">
            <span className="text-white cursor-pointer">𝕯𝖊𝖛 𝕯𝖚𝖉𝖊𝖘</span>
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-between text-lg space-x-8">
            {navmenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="text-white px-3 py-2  hover:shadow-[0px_0px_5px_2px_#ef4444] "
                >
                  {" "}
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden" onClick={() => setBool(!Bool)}>
          <MdMenu className="text-4xl cursor-pointer text-white" />
        </div>
      </div>
      <ResponsiveMenu open={Bool} />
    </>
  );
}
export default Devnarbar;
