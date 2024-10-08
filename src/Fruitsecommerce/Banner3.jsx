import React from "react";
import BannerPng from '../assets/fruitshopimgs/banner-bg.jpg';
import {motion} from "framer-motion";
import { FadeLeft} from '../Fruitsecommerce/Animation.jsx';

const bgstyle ={
    backgroundImage:`url(${BannerPng})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundrepeat:"no-repeat",


}

function Banner3(){
    return(
        <section className="">
            <div style={bgstyle} className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
                {/* images */}
               <div></div>
                {/* information */}
                <div className="flex flex-col justify-center ">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                        <motion.h1
                        variants={FadeLeft(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport = {{once:true}}
                        className="text-3xl lg:text-6xl font-bold uppercase">Get Fresh Fruits Today</motion.h1>
                        <motion.p
                        variants={FadeLeft(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport = {{once:true}}
                        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis autem dolor, ipsam in temporibus quo magnam quaerat sequi ratione quos harum illo sit nostrum eius tempora! Odio consectetur ut quae.</motion.p>
                        <motion.div 
                        variants={FadeLeft(0.9)}
                        initial = "hidden"
                        animate = "visible"
                        className="flex justify-center md:justify-start">
                            <button className="primary-btn">Learn More</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Banner3