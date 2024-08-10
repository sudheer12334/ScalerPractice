const ListItems=(props)=>{
    console.log(props);
    const deleteTask=props.deleteTask;
    const task=props.tasks
    return(
        <div className="listitems_container">
            <ul>
                {
                     task.map((task,index)=>{
                       return <li key={index} id={task.id}>{task.taskName} 
                       <button onClick={()=>deleteTask(task.id)}>X</button></li>
                    })
                }
            </ul>
        </div>
    )
}

export default ListItems;