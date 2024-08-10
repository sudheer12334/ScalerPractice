const Signup=()=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={Name} placeholder="name"/>
            <br/>
            <label>Password</label>
            <input type="password" value={Password} placeholder="password"/>
        </form>
    )
}
export default Signup