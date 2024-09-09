import ComponentC from './ComponentC.jsx';
import React, {useContext} from 'react';
import {Usercontext} from './ComponentA.jsx';
function ComponentB(){
    const user = useContext(Usercontext);
return(
    <div className="border-2 border-black p-3 m-3">
        <h1>Component B</h1>
        <h2>{`Hello ${user}`}</h2>
        <ComponentC/>
    </div>
);
}
export default ComponentB