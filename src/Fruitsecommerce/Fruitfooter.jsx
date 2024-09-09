import React from "react";
import {FaFacebookF, FaTwitter, FaInstagram, FaLeaf} from 'react-icons/fa';
import {motion} from "framer-motion";
function Fruitfooter(){
    return(
        <footer className="bg-[#fb923c]/10 py-12">
            <motion.div
            initial={{opacity:0}}
            whileInView = {{opacity:1}}
            transition ={{duration:1, delay:0.2}}
            className="container flex justify-between items-center">
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                    <p className="text-[#de2c4d]">Fruit</p>
                    <p className="text-[#fb923c]">Fiesta</p>
                    <FaLeaf className= "text-green-500"/>
                </div>
                <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
                    <FaInstagram/>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaFacebookF/>
                </div>
            </motion.div>
        </footer>
    );
}
export default Fruitfooter