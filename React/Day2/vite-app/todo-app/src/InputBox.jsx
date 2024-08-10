import React, { useState } from 'react';


const InputBox =({addTask})=>{

  const[ value, setValue] = useState('');
  // console.log(value);
  const handleClick= ()=>{
    addTask(value);
    setValue('');
  }
 
    return(
        <div>
            <input type='text' value={value} onChange = {(event)=> {setValue(event.target.value)}} placeholder="Enter your task"></input>
            <button onClick={handleClick}>Add Task</button>
        </div>
    )
}
export default InputBox;