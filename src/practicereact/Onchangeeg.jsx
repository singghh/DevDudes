import React, {useState} from 'react';
function Onchangeeg(){
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();

    function handlenameevent(event){
        setName(event.target.value);
    }
    function handlequantityevent(event){
        setQuantity(event.target.value);
    }
    return(
        <div>
            <p><input value={name} className="border-2  m-5  p-2"  onChange={handlenameevent} /></p>
            <p>The entered name is : {name}</p>
            <p> <input type="number" className="border-2  m-5  p-2" onChange={handlequantityevent} /></p>
            <p>The entered quantity is: {quantity}</p>
        </div>
    );
}
export default Onchangeeg