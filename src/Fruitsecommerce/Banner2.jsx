import React from "react";
import Fruitsplash from '../assets/fruitshopimgs/fruit-plate2.png';
import {motion} from "framer-motion";
import {FadeLeft, FadeUp} from '../Fruitsecommerce/Animation.jsx';
function Banner2(){
    return(
        <section className="">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
               
                {/* information */}
                <div className="flex flex-col justify-center drop-shadow-md  px-20">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                        <motion.h1
                        variants={FadeUp(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport = {{once:true}}
                        className="text-3xl lg:text-6xl font-bold uppercase">Online Fruit Store</motion.h1>
                        <motion.p
                        variants={FadeUp(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport = {{once:true}}
                        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis autem dolor, ipsam in temporibus quo magnam quaerat sequi ratione quos harum illo sit nostrum eius tempora! Odio consectetur ut quae.</motion.p>
                        <motion.p
                        variants={FadeUp(0.9)}
                        initial="hidden"
                        whileInView="visible"
                        viewport = {{once:true}}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae hic asperiores eligendi harum consequuntur veritatis!</motion.p>
                        <motion.div 
                        variants={FadeUp(1.1)}
                        initial = "hidden"
                        animate = "visible"
                        className="flex justify-center md:justify-start">
                            <button className="primary-btn">Learn More</button>
                        </motion.div>
                    </div>
                </div>
                 {/* images */}
                 <div className="flex justify-center items-center">
                    <motion.img
                    initial={{opacity:0, x:200, rotate:75}}
                    whileInView={{opacity:1, x:0, rotate:0}}
                    transition={{duration:1,delay:0.2 }}
                    viewport={{once:true}}
                    src={Fruitsplash} className="w-[300px] md:max-w-[400px] h-full object-cover" alt="" />
                </div>
            </div>
        </section>
    );
}
export default Banner2