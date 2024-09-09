import MernBackgrd from "../assets/devdudesimgs/mern_background.jpg";
import Mongodb from "../assets/devdudesimgs/mongo.jpg";
import Expressjs from "../assets/devdudesimgs/expressjs.jpg";
import Reactj from "../assets/devdudesimgs/reacjs.jpg";
import Nodejs from "../assets/devdudesimgs/nodejs.jpg";
import { Link } from "react-router-dom";
import React, {useState} from 'react';
import Joinus from '../Mern_page/Joinus.jsx';
import Intro from '../Mern_page/intro.jsx';
import Intro2 from '../Mern_page/Intro2.jsx';
function Infocard({image, title, description, isActive, onClick}){
    return(
        <div className="cursor-pointer flex flex-col items-center relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" onClick={onClick}>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-transparent to-blue-400 opacity-40"></div>
            <img className="w-48" src={image} alt={title} />
            <h1 className="text-white font-semibold ">Click</h1>
            {isActive && (
                <div className="inset-0 absolute flex items-center justify-center  bg-black bg-opacity-60 rounded-lg p-4 transition-opacity duration-500">
                    <p className="text-white text-xs sm:text-xl md:text-sm">{description}</p>
                </div>
            )}
        </div>
    );
}
function DevHero(){
    const [activeindex, setActiveindex] = useState(null);
    const info = [
        {image:Mongodb, title:"Mongodb", description:"MongoDB is a NoSQL database, stores data in JSON-like documents."},
        {image:Expressjs, title:"ExpressJs", description:"Express.js is Node.js framework that provides robust features."},
        {image:Reactj, title:"ReactJs", description:"It is library known for component-based architecture and virtual DOM."},
        {image:Nodejs, title:"NodeJs", description:"Node.js is JavaScript runtime built on Chrome's V8 engine."}
    ];
    return(
        <div className="bg-[#071236] h-full w-full lg:pt-10">
            <div className="relative h-[100vh]">
            <div className="flex md:flex-row w-full flex-col justify-center items-center">
                <div className="flex-1 mt-20">
                    <h1 className="text-6xl font-bold md:text-8xl text-white mx-5">MERN STACK</h1> 
                    <h1 className="text-4xl font-semibold md:text-6xl font-sans text-white mx-5">Development</h1>
                    <div className="flex gap-10 mt-20 items-center justify-center">
                        <div className="flex">
                            {
                            info.map((item,index) =>(
                                <Infocard
                                key={index}
                                image = {item.image}
                                title = {item.title}
                                description = {item.description}
                                isActive = {activeindex === index}
                                onClick ={()=> setActiveindex(index===activeindex ? null:index)}
                                />
                            ))
                            }
                        </div>
                    </div>
                    <div className="m-4 p-4 relative text-center ">
                        <div className='relative z-10 md:my-4'>
                            <h1 className=' text-white font-semibold md:text-2xl text-2xl'>Want to know what we provide</h1><br />
                            <Link className=' text-white  border p-2 rounded-md hover:shadow-md hover:box-decoration-slice' to="/features"> Explore Features </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-36 md:mt-80 lg:w-[800px] mt-8">
                    <img className="bottom-10 right-0 opacity-90 md:hidden sm:hidden hidden lg:block" src={MernBackgrd} alt="" />
                </div>
            </div>
            </div>
            <Intro/>
            <Intro2/>
            <Joinus/>

        </div>
    );
}
export default DevHero

// <div className="relative w-64 h-80 perspective-1000" onClick={onClick}>
            //     <div className={`w-full h-full absolute transition-transform transform-style-preserve-3d duration-700 ${isActive?'rotate-y-180':''}`}>
            //         <div className="w-full h-full absolute bg-white backface-hidden bg-gradient-to-l from-transparent to-blue-400 opacity-40 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center">
            //             <img className="w-48" src={image} alt={title} />    
            //             <h1 className="text-white font-semibold mt-4 ">{title}</h1>
            //         </div>
            //         <div className="w-full h-full absolute bg-black bg-opacity-80 flex items-center justify-center rounded-lg backface-hidden transform rotate-y-180">
            //             <div className="p-4 text-white text-center overflow-auto max-h-full">
            //             <p>{description}</p>
            //             </div>
            //         </div>
            //     </div>
            // </div>            

// export default Card;
