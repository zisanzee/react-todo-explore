


import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle})=>{
  

  return (
    <div className="container">
    {tasks.length > 0 ? tasks.map(task => <Task onDelete={onDelete} key={task.id} task={task} onToggle={onToggle}/>) : 'NOTHING TO SHOW'}
    </div>
  )
}

export default Tasks