import {motion, AnimatePresence} from "framer-motion";
function ResponsiveMenu({open}){
    return(
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{opacity:0, y: -50}}
                    animate={{opacity:1, y:100}}
                    exit={{opacity:0, y: -50}}
                    transition={{duration:0.5}}
                    className="absolute top-0 left-0 w-full h-screen z-20">
                        <div className="text-xl font-mono  bg-[#4c6d95] text-white py-10 m-7 rounded-2xl">
                            <ul className="flex flex-col items-center gap-10 ">
                                {/* <li>Compete</li>
                                <li>Roadmaps</li>
                                <li>Explore More</li> */}
                                <a href="https://discord.gg/TB2yM6RF">Join Us</a>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
}
export default ResponsiveMenu