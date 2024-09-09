import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';
export const Usercontext = createContext();
function ComponentA(){
    const [user, setUser] = useState("sai charan");
    return(
        <div className="border-2 border-black p-3 m-3">
            <h1>Component A </h1>
            <h2>{`Hello ${user}`}</h2>
            <Usercontext.Provider value={user}>
                <ComponentB user={user}/>
            </Usercontext.Provider>
        </div>
    );
}
export default ComponentA