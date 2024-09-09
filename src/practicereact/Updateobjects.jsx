import React, {useState} from 'react';
function Updateobjects(){
    const [car, setCar] = useState({year:2024, make:"ford", model:"Mustang"});
    function handleyearChange(event){
        setCar({...car, year:event.target.value});
    }
    function handlemakeChange(event){
        setCar({...car, make:event.target.value});
    }
    function handlemodelChange(event){
        setCar({...car, model:event.target.value});
    }
    return(
        <div className="flex flex-col items-center">
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input className="border-2 m-2 border-black" type="number" value={car.year} onChange={handleyearChange} />
            <input className="border-2 m-2 border-black" value={car.make}   type="text" onChange={handlemakeChange} />
            <input  className="border-2 m-2 border-black" value={car.model}  type="text" onChange={handlemodelChange} />
        </div>
    );
}
export default Updateobjects