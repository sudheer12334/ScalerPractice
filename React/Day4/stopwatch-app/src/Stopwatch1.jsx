import { useState ,useRef,useEffect} from "react";

const Stopwatch1=()=>{
    const [time,setTime]=useState(0);
    const timerId=useRef(null);

    useEffect(()=>{  // to avoid memory leakage
        return ()=>{
            clearInterval(useRef.current);  
        }
     },[])
    const start=()=>{
        timerId.current=setInterval(()=>{
            setTime(prevTime=> prevTime+1)
        },1000)
    }
    const stop=()=>{
        clearInterval(timerId.current);
        setTime(0);
    }
    const pause=()=>{
        clearInterval(timerId.current);
    }



    return(
        <>
       <h1>Stop Watch</h1>
       <div>{time}</div>
       <button onClick={start}>Start</button>
       <button onClick={pause}>Pause</button> 
       <button onClick={stop}>Stop</button>
        </>
    )
}
export default Stopwatch1;