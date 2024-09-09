import React,{useState} from 'react';
function Todolist(){
    const [tasks, setTasks] =useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewtask] = useState("");
    function handleInputchange(event){
        setNewtask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(tasks => [...tasks, newTask]);
        setNewtask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i!==index);
        setTasks(updatedTasks);
    }
    function moveTaskup(index){
        if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
        }
    }
    function moveTaskdown(index){
        if(index<tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);

    }
}
    return(
        <div className="to-do-list flex flex-col bg-black min-h-screen items-center " >
            <h1 className="font-bold text-5xl text-white text-center" >To-Do-List</h1>
            <div>
                <input className="border-2 rounded-lg border-black p-2 m-3" type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputchange} />
                <button className="add-button bg-green-600 hover:bg-green-700 text-white font-bold  rounded-lg border-none border-black p-2" onClick={addTask}>Add</button>
            </div>
            <ol className="bg-slate-300 p-4 rounded-lg">
                {tasks.map((task, index)=> 
                <li className="m-2 p-2 mb-2 rounded-lg border-2 flex justify-between border-black" key={index}>
                <span className="text font-bold grow shrink basis-0 text-xl">
                    {task}
                </span>
                <div className="">
                <button className="delete-button bg-red-600 hover:bg-red-700 text-white  font-bold  rounded-lg  border-none  m-2 p-2 " onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-button   bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg  border-none  m-2 p-2 " onClick={()=>moveTaskup(index)}>Move Up</button>
                <button className="move-button   bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg  border-none  m-2 p-2" onClick={()=>moveTaskdown(index)}>Move Down</button>
                </div>
                </li>
                )}
                
            </ol>
        </div>
    );
}
export default Todolist