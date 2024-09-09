import React, { useState } from "react";
import {FaLeaf} from "react-icons/fa";
import {MdOutlineShoppingCart,MdMenu} from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu.jsx';
import {motion} from "framer-motion";

const navbarmenu = [
    {
        id:1,
        title:"Home",
        link:"/",
    },
    {
        id:2,
        title:"Products",
        link:"/",
    },
    {
        id:3,
        title:"About",
        link:"/",
    },
    {
        id:4,
        title:"Shop",
        link:"/",
    },
    {
        id:5,
        title:"Contacts",
        link:"/",
    }
]
function Fruitnavbar(){
    const [open, setOpen] = React.useState(false);
    return(
        <>
        <nav>
            <motion.div
            initial={{opacity:0}}
            animate = {{opacity:1}}
            transition = {{duration:0.5, delay:0.5}}
            className="container flex justify-between items-center py-4 md:pt-4">
                <div className="text-2xl flex item-center gap-2 font-bold uppercase">
                    <p className="text-[#de2c4d] ">Fruit</p>
                    <p className="text-[#fb923c] ">Fiesta</p>
                    <FaLeaf className="text-green-600"/>
                </div>
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 text-gray-500">
                        {navbarmenu.map((menu)=>(
                            <li key={menu.id} > 
                                <a href={menu.link} className="inline-block py-1 px-3 hover:text-[#de2c4d] hover:shadow-[0px_6px_10px_0px_#ef4444] rounded-lg font-semibold">{menu.title}</a>
                            </li>
                        ))}
                        <button  className="text-2xl hover:bg-[#de2c4d] rounded-full hover:text-white p-2 duration-200">
                        <MdOutlineShoppingCart/>
                        </button>
                    </ul>
                </div>
                <div className="md:hidden" onClick={()=>
                    setOpen(!open)
                }>
                    <MdMenu className="text-4xl"/>
                </div>
            </motion.div>
        </nav>
        <ResponsiveMenu open={open} />
        </>
    );
}
export default Fruitnavbar