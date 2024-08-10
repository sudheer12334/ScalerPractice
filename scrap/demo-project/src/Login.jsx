import {useState} from 'react'

const Login=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('name is',name,'||','password',password);
        localStorage.setItem('name',name);
        localStorage.setItem('password',password);
        setName("");
        setPassword("");
    }
    
    
    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text"  placeholder="name" onChange={ (e)=>{ setName(e.target.value)}} value={name}/>
            <br/>
            <label>Password</label>
            <input type="password" placeholder="password" onChange={ (e)=>{ setPassword(e.target.value)}} value={password}/>
            <button>Submit</button>
        </form>
    )
}

export default Login;