import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30px',
        reminder: true,
    }, 
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
])
  // const name ='Brad'
  // const x = true

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks}/>
      {/* <h1>Hey sup!</h1> */}
      {/* <h2>hello {name, 1+ 1, '' , x ? 'Yes' : 'No'}</h2> */}
    </div>
  );
}

export default App;
