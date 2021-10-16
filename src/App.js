import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTask = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTask()
  },[])

  //fecth tasks ------------------------------------------------- 
  const fetchTasks = async()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    //return data since we can set data with the const fetchtasks
    return data
  }

  //fecth task ------------------------------------------------- 
  const fetchTask = async(id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    //return data since we can set data with the const fetchtasks
    return data
  }

  //add task ----------------------------------------------------
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
    // console.log(object)
    // const id = Math.floor(Math.random() * 10000) +1
    // // console.log(id)
    // const newTask = {id, ...task }
    // setTasks([...tasks, newTask])
  }

  //Delete Task---------------------------------------------------
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
      
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Toggle Reminder -----------------------------------------------
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, 
                    reminder: !taskToToggle.toggleReminder
    }
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
    })

    const data = await res.json()
    // console.log(id)
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder:
      // !task.reminder} : task
      data.reminder} : task
      ))

  }

  // const name ='Brad'
  // const x = true
  return (
    <div className='container'>
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?  <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> : (
        'No Tasks to Show at this moment'
      )}
      {/* <h1>Hey sup!</h1> */}
      {/* <h2>hello {name, 1+ 1, '' , x ? 'Yes' : 'No'}</h2> */}
    </div>
  );
}

export default App;
