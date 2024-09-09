import React, {useEffect, useRef, useState} from 'react';
function Referenceeg(){
    const ref = useRef(0);

    useEffect(()=>{
        console.log("Component rendered")
    })

    function handleclick(){
        ref.current = ref.current +1;
        console.log(ref.current)
    }
    return(
        <div>
            <button  className="border-2 border-black rounded-md m-3 p-1 text-3xl" onClick={handleclick}>Click me</button>
        </div>
    );
}
export default Referenceeg