// import PropTypes from 'prop-types'

const Tasks = ({tasks}) => {
    return(
        <>
         {tasks.map((task) => (
            <h3 key={task.id}> {task.text} </h3>
         ))}
        </>    
    )
}

export default Tasks

