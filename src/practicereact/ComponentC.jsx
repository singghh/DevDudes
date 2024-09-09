import {Usercontext} from './ComponentA.jsx';
import ComponentD from './ComponentD.jsx';
import React, {useContext} from 'react';
function ComponentC(){
    const user = useContext(Usercontext);
    return(
        <div className="border-2 border-black p-3 m-3">
            <h1>Component C</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentD />
        </div>
    );
}
export default ComponentC