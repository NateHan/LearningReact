import { useState } from 'react'
import { AddTask } from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
    },
    {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
    },
    { 
      "id": 3,
      "text": "Listen to Tool",
      "day": "March 3rd at 1:30pm",
      "reminder": true
    }
])

  const addTask = (task) => {
    console.log("We got: ", task) 
    const id = tasks.length + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder }: task
    ))
  }

  return (
    <div className='container'>
      <Header title={'Dingus'}/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} toggleReminder={toggleReminder} onDelete={deleteTask}/>) : 'No Tasks to show'}
    </div>
  );
}

export default App;
