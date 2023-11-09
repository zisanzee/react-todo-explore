import { useState } from 'react';



const AddTask = ({addTask})=>{
  const [title, setText] = useState('')
  const [userId, setDay] = useState('')
  const [completed, setReminder] = useState(false)

  const onSubmit = (e)=>{
    e.preventDefault()
    if(!title){
      alert('Please add a task')
      return
    }
    addTask({title, userId, completed})
    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={title} onChange={(e)=> setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Date and Time</label>
        <input type="text" placeholder="Add date and time" value={userId} onChange={(e)=> setDay(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Set Reminder</label>
        <input checked={completed} type="checkbox" value={completed}  onChange={(e)=> setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value="Save Task"  />
    </form>
  )
}

export default AddTask