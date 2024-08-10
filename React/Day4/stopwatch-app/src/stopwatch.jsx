import './App.css'

import {useState,useRef} from 'react'
import { useEffect} from 'react';
const Stopwatch=()=>{

 const [time,setTime] = useState(0);   

 const timerId=useRef(null);

 useEffect(()=>{  // to avoid memory leakage
    return ()=>{
        clearInterval(useRef.current);  
    }
 },[])
 const startHandler=()=>{
   
    timerId.current = setInterval(()=>{
        setTime(prevTime=> prevTime+1);
    
    } ,1000);

 }

 const pauseHandler=()=>{
    console.log('timer paused');
    clearInterval(timerId.current);
}

const stopHandler=()=>{
    console.log('timer stopped');
    clearInterval(timerId.current);
    setTime(0);
}
    return(
        <div className='stopwatch-container'>
            <h1>Stop Watch</h1>
            <h3>{time}</h3>
            <button onClick={startHandler}>start</button>
            <button onClick={pauseHandler}>pause</button>
            <button onClick={stopHandler}>stop</button>
        </div>
    )
}
export default Stopwatch;