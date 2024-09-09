function Clickevents(){
    const handleclick = (e)=>e.target.textContent = "clicked!"
    return(
        <button className="border-2 m-3 p-3 rounded-md bg-red-300 text-white font-bold" onClick={(e)=>{handleclick(e)}}>Click me</button>
    );
}
export default Clickevents























//     const handleclick = (e)=> console.log(e);
//   return (
    //     <button  onClick={(e)=>handleclick(e)}>click me</button>
    //   );
  // const handleClick = ()=> console.log("you completed the course!");
    // return (
    //     <button onClick={handleClick}>Click me</button>
    // );