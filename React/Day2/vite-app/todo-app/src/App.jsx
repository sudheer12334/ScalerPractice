import { useState } from 'react'
import ListItems from './ListItems'
import InputBox from './InputBox'
import './App.css'

function App() {
 const [tasks, setTasks] = useState([]);

  //const newTasks=[...tasks];
  const addTask=(currentTask)=>{
    if(currentTask.length===0) return;
    const newTasks=[...tasks];
      newTasks.push({
      id: Date.now(),
      taskName : currentTask
    });
    setTasks(newTasks);
   
  }
  const deleteTask=(id)=>{
    console.log(id);

    const restOfTasks = tasks.filter((task)=>{
      return task.id!==id;
    });

    setTasks(restOfTasks);
  }
  
  return (
    <>
      <div className="todoapp_container">
       <h1>Todo App</h1>
        <InputBox addTask={addTask}/>
        <ListItems tasks={tasks} deleteTask={deleteTask}/>
      </div>
    </>
  )
}

export default App;
