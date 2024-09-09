import React, {useState, useEffect} from 'react';
function Resize(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("event listener added"); 
    },[]);
    

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    );
}
export default Resize