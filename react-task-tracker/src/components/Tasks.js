import Task from './Task.js'

const Tasks = ({tasks}) => {
    return (
        <>
            {tasks.map((t) => (
                <Task key={t.id} task={t}/>
            ))}
            
        </>
    )
}

export default Tasks
