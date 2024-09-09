import React, {useState, useEffect} from 'react';
function Useeffect(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    useEffect(()=>{
        document.title = `count :  ${count}`;
    },[count]);
    function addcount(){
        setCount(c=>c+1);
    }
    function subtractcount(){
        setCount(c=>c-1);
    }
    function changeColor(){
        setColor(color==="green"?"red":"green");
    }
    return(
        <div>
            <p style={{color}}>Count: {count}</p>
            <button className="border-2 p-1 m-2 border-black rounded-md" onClick={addcount}>add</button>
            <button className="border-2 p-1 m-2 border-black rounded-md" onClick={subtractcount}>subtract</button>
            <button className="border-2 p-1 m-2 border-black rounded-md" onClick={changeColor}>Change color</button>

        </div>
    );
}
export default Useeffect