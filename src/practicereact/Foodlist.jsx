import React, {useState} from 'react';
function Foodlist(){
    const [foods, setFoods] = useState(["apple","banana","orange"]);
    function handleAddfood(){
        const newfood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
        setFoods(f=> [...f, [newfood]]);
    }
    function handleRemovefood(index){
        setFoods(foods.filter((_, i)=> i!==index));
    }
    return(
        <div className="flex flex-col items-center m-4 p-2">
            <h2 className="m-2 p-2 font-bold font-serif">List of Foods</h2>
            <ul className="border-2 p-5 border-black rounded-lg">
                {foods.map((food, index)=>
                    <li key={index} onClick={()=>handleRemovefood(index)}>{food}</li>
                )}
            </ul>
            <input className="border-2 border-black m-3 p-1 rounded-md" type="text" id="foodinput" placeholder='Enter food name' />
            <button className="border-2 bg-slate-400 p-1 border-black rounded-lg " onClick={handleAddfood}>Add Food</button>
        </div>
    );
}
export default Foodlist