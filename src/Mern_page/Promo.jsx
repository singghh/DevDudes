import {motion} from "framer-motion";
import React,{useState} from "react";
import Devdudes from "./Devdudes.jsx";
// import Timeline from "./Timeline.jsx";
import tech_mern from "../assets/devdudesimgs/self_mern.webp";
import hacker from "../assets/devdudesimgs/settedit.gif";
function Promo(){
    const [open, setOpen] = useState(false);
    return(
        <>
        {open ? (<Devdudes/>) :(
        <nav className="justify-center items-center flex w-full">
            <motion.div
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            transition={{duration:0.8, delay:0.7}}
            className="mt-28 sm:mt-0"
            > 
            <div className="flex justify-center items-center">
                <img src={hacker} alt="" />
            </div>
            <div className="flex justify-center items-end h-full p-4">
                <button className="bg-black text-white font-serif text-lg lg:text-2xl px-6 py-3 md:text-xl rounded-md" onClick={()=>
                setOpen(!open)
            }>Click to go</button>
            </div>

            </motion.div>
            
        </nav>)}
        </>
    );
}
export default Promo