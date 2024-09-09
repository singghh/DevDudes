import React,{useContext} from 'react';
import {Usercontext} from './ComponentA.jsx';
function ComponentD(){
    const user = useContext(Usercontext);
    return(
        <div className="border-2 border-black p-3 m-3">
            <h1>Component D</h1>
            <h2>{`This is ${user}`}</h2>
            <p>{`Bye ${user}`}</p>
        </div>
    );
}
export default ComponentD