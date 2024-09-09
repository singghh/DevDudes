// import React,{useState} from 'react';
import React, {useState} from 'react';
function Mycomponent(){
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [isEmployed, setisEmployed] = useState();
    const updateAge = () =>{
        console.log("function is called ");
        setName("saicharan");
        console.log("name is updated");
        setAge(30);
        console.log("age is updated");
        setisEmployed(true?"yes":"no")
        console.log("status is identified");
    }
    return(
        <div>
            <p className="font-bold m-5 p-3 font-serif">Name: {name}</p>
            <p className="font-bold m-5 p-3 font-serif">Age: {age}</p>
            <p className="font-bold m-5 p-3 font-serif">Is Employed: {isEmployed}</p>
            <button className="border-2 m-5 p-3 rounded-lg bg-slate-200 font-bold font-serif" onClick={updateAge}>click me</button>
        </div>

    );
}
export default Mycomponent



// const [name, setName] = useState();
// const handleclick = ()=>{
//     name="sai charan";
// }
// return(
//     <div>
//         <p className="p-3 m-5 font-bold text-3xl ">Name : {name}</p>
//         <button className="border-2 p-3 m-5" onClick={(handleclick)} >click me</button>
//     </div>
    
// );
// function Mycomponent(){
//     const [name, setName] = useState("Click to display name");
//     const handleclick = ()=>{
//         setName("Sai charan");
//     }
//    return(
//     <div>
//         <p className="m-5 p-3 text-3xl font-bold">Name: {name}</p>
//         <button className="border-2 m-5 p-3" onClick={handleclick}  >Click me</button>
//     </div>
//    );
// }