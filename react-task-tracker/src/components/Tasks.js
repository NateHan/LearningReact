import Task from './Task.js'

const Tasks = ({tasks, toggleReminder, onDelete}) => {
    return (
        <>
            {tasks.map((t) => (
                <Task key={t.id} task={t} toggleReminder={toggleReminder} onDelete={onDelete}/>
            ))}
            
        </>
    )
}

export default Tasks
