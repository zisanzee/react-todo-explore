import { useEffect, useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';




function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTasks(data.splice(0, 10)))
  },[])

    //Add Task
    const addTask = (task)=>{
      const id = Math.floor(Math.random() * 10000) + 1

      const newTask = {id, ...task}
      setTasks([newTask, ...tasks])
    }

    //Show add task form

    const showForm = (showAddTask)=>{
      setShowAddTask(!showAddTask)
    }

    // delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id)=>{
      setTasks(tasks.map(task => task.id === id? {...task, completed: !task.completed }: task))
    }
 

  return (
    <>
 
     <Header showForm={()=>{showForm(showAddTask)}} 
    showAdd={showAddTask} title='Task Tracker' author='zisan' />
     {showAddTask? <AddTask addTask={addTask}/> : ''}

    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />

    </>
  )
}

export default App
