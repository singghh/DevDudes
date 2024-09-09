import profilepic from './profilepic.jpg';
import React, {useState, useEffect} from 'react';
function Digitalclock(){
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setTime(new Date());
        },1000);
        return ()=>{
            clearInterval(intervalID);
        }
    },[]);
    function formattime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours>12 ? "PM": "AM";
        hours = hours%12;
        if(hours<12 && minutes<60 && seconds<60){
            return `${3-hours}:${padzero(60-minutes)}:${padzero(60-seconds)}`;
        }
        // return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)}`;
        // bg-center bg-fixed bg-no-repeat bg-cover
    }
    function padzero(number){
        return (number<10 ? "0" : "") + number;
    }
    return(
        <div className="bg-[url('./profilepic.jpg')] min-h-[100vh] bg-center bg-fixed bg-cover bg-no-repeat flex items-center justify-center ">
            <div className="w-[100vw] bg-slate-500" >
                <div className="text-white text-9xl text-center font-bold font-mono " >
                <span >{formattime()}</span>
                </div>
            </div>
        </div>
    );

}
export default Digitalclock