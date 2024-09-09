import React,{useState, useEffect, useRef} from 'react';
function Useallhooks(){
    let [number, setNumber] = useState(0);
    useEffect(()=>{
        console.log(number);
    });
    function handleclick(){
        setNumber(number=> number+1);
    }
    return(
        <div>
            <button className="border-2 text-2xl font-serif border-black p-1 m-2 rounded-2xl" onClick={handleclick}>Click me</button>
        </div>
    );
}
export default Useallhooks