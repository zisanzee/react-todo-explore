const Task = ({task, onDelete, onToggle})=>{
  const random = 
  console.log();
  const date = `${Math.floor(Math.random() * 30) + 1 }/${Math.floor(Math.random() * 12) + 1 }/2023` 
  return (
    <div onDoubleClick={()=>{
      onToggle(task.id)
     }} className={`task-container ${task.completed? 'reminder-true' : ''}`}>
    <h3 > {task.title} </h3>
    <h4>{date}</h4>
    <button onClick={()=>{onDelete(task.id)}}>X</button>
   </div>
  )
}

export default Task
