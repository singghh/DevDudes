import React from "react";
import apple from "../assets/fruitshopimgs/apple.png";
import avocado from "../assets/fruitshopimgs/avocado.png";
import cherry from "../assets/fruitshopimgs/cherry.png";
import orange from "../assets/fruitshopimgs/orange.png";
import {motion} from "framer-motion";
import {FadeLeft} from "../Fruitsecommerce/Animation.jsx";
const Menudata =[
    {
        id:1,
        title:"Fresh Red Apples",
        link:"/",
        price:"$1.50",
        img:apple,
        delay:0.3,
    },
    {
        id:2,
        title:"Fresh Oranges",
        link:"/",
        price:"$1.00",
        img:avocado,
        delay:0.6,
    },
    {
        id:3,
        title:"Fresh Avocado",
        link:"/",
        price:"$2.50",
        img:cherry,
        delay:0.9,
    },
    {
        id:4,
        title:"Fresh Cherries",
        link:"/",
        price:"$2.00",
        img:orange,
        delay:1.2,
    }
]
function Fruitmenu(){
    return(
        <section>
            <div className="pt-12 pb-20">
                <motion.h1 
                initial = {{opacity:0, x:-200}}
                whileInView={{opacity:1, x:0}}
                transition = {{duration:1, delay:0.3}}
                className="text-2xl font-bold text-left pb-10 uppercase">
                    Our Menu
                </motion.h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {Menudata.map((menu)=>(
                    <motion.div
                    variants={FadeLeft(menu.delay)}
                    initial="hidden"
                    whileInView={"visible"}
                    whileHover={{scale:1.1}}
                    className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3">
                        <img className="w-[60px] mb-4 scale-125 -translate-y-6 transform" src={menu.img} alt="" />
                        <div>
                            <h1 className="text-lg font-semibold">{menu.title}</h1>   
                            <p className="text-lg font-semibold text-[#fb923c]">{menu.price}</p>
                        </div>
                    </motion.div>
                    
                ))}
                </div>
            </div>
        </section>
    );
}
export default Fruitmenu