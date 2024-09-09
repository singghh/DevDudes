import React from 'react';
import Discord from "../assets/devdudesimgs/discord_image.png";
import Question from "../assets/devdudesimgs/ques.jpg";
import Linkedimg from "../assets/devdudesimgs/linkedimg.png"
import Limage from "../assets/devdudesimgs/profilepic.jpg";
import L2image from "../assets/devdudesimgs/varunimg.jpeg";
function Joinus(){
    const linkedinmenu = [
        {
            id:1,
            title:"A Sai charan",
            link:"https://www.linkedin.com/in/a-sai-charan-166573259/",
            image: Limage
        },
        {
            id:2,
            title:"Bamla Varun Singh",
            link:"https://www.linkedin.com/in/bamla-varun-singh-b05245259/",
            image:L2image
        }
    ]
    return(
        <>
            <div className=''>
                <div className="bg-[#2b3f81] text-white rounded-lg p-4 max-w-sm mx-auto sm:mt-10 mt-4 ">
                    <div className="flex items-center space-x-4 justify-center">
                        <div >  
                            <a href="https://discord.gg/TB2yM6RF"><img 
                            className="w-20 h-20 cursor-pointer hover:scale-110"
                            src={Discord} 
                            alt="Discord Logo" 
                            /></a>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-md font-semibold font-mono">What to get updates ?</h2>
                            <a href="https://discord.gg/TB2yM6RF" className="text-md text-center font-semibold font-mono cursor-pointer hover:underline"> Join our Community</a>
                        </div>
                    </div>
                </div>
                <br />
                <div className=''>
                    <div className='bg-blue-950 flex justify-center gap-5 items-center'>
                        <div className='text-white pl-2'>
                            <h1 className='text-xl md:text-2xl'>Any queries</h1>
                        </div>
                        <img className="rounded-full w-24 p-3" src={Question} alt="" />
                        <div className='text-white text-xl md:text-2xl'>
                            Reach out to us
                        </div>
                    </div>
                </div>
                <br />
                <div className='bg-[#122355] rounded-lg p-4 max-w-xl mx-auto'>
                    <div className="flex text-sm md:text-lg space-x-8 items-center justify-center">
                            {linkedinmenu.map((menu)=>(
                                <div key={menu.id} className='text-center'>
                                    <div className='rounded-2xl p-4 shadow-2xl flex justify-center items-center flex-col'>
                                        <div className='md:w-20 w-14'>
                                        <img className='rounded-full ' src={menu.image} alt="" /></div>
                                        <div className='text-center'>
                                        <a target="_blank" className="text-white md:text-xl text-sm"> {menu.title}</a>
                                        <span className='flex justify-center'> 
                                        <span className='p-2 sm:p-0'><img src={Linkedimg} alt="LinkedIn" className="w-6 h-6 sm:mr-2" /></span>
                                        <a href={menu.link} target="_blank" className=" text-blue-500 hidden sm:block">
                                            Connect on LinkedIn 
                                        </a>
                                    </span>
                                    </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <br />
                <div className='h-10 bg-[#122355]'>
                        <h1 className='text-white text-center font-mono text-2xl'>Follow us</h1>
                </div>
            </div>
        </>
    );
}
export default Joinus