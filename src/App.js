import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddForm from "./components/AddForm";
import { useState } from "react";


function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Wednesday',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meet Dan for lunch',
        day: 'Friday',
        reminder: false,
    },
    {
        id: 3,
        text: 'Call Mom',
        day: 'Sunday',
        reminder: true,
    },
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    //here we use the array map method to set each task that has the same id to the opposite value or just return the same task object as before
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: 
        !task.reminder} : task
      )
      
    )
  }

  return (
    <div className="container">
      <Header title="Task Manager" onAdd={() => setShowAddForm(!showAddForm)} showForm={showAddForm}/>
      {showAddForm && <AddForm onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Nothing To Show'}
    </div>
  );
}

export default App;
