import React, {useState} from 'react';
function Colorpicker(){
    const [color, setColor]=useState("#FFFFFF");
    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(
        <div className="flex flex-col items-center m-5 p-3">
            <h1 className="font-bold text-3xl m-5 ">Color Picker</h1>
            <div style={{backgroundColor:color}}>
            <p className="p-3 m-2 h-48 w-48 font-bold font-serif text-xl text-white text-center rounded-lg">Selected Color: {color}</p>
            </div>
            <label className="m-3 p-3 text-2xl font-bold font-mono "> Select a Color:</label>
            <input className="w-28 h-10 m-2 p-0.5 border-2 border-black rounded-lg "  type="color" value={color} onChange={handleColorChange}     />

        </div>
    );
}
export default Colorpicker