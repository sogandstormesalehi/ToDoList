import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
])

  //DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //REMINDER
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
     {...task, reminder: !task.reminder} : task))
  }

  //ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 3737 + 1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle = {toggleReminder}/>
       : 'No Task Yet'}
    </div>
  )
}

export default App
