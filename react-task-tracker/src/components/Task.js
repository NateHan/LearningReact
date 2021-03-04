import {FaTimes} from 'react-icons/fa'
import React from 'react'

const Task = ({task, toggleReminder, onDelete}) => {
    return (
        <div 
            className={`task ${ task.reminder ? 'reminder' : ''}`}
            onDoubleClick={ () => toggleReminder(task.id)}
        >
            <h3>{task.text} 
                <FaTimes 
                    style={{color: 'red', cursor: 'pointer'}} 
                    onClick={ () => onDelete(task.id)}
                />
            </h3>
            <p>Day: {task.day}</p>
            {task.reminder ? (<h3 style={{color : 'green'}}>!!!</h3>) : 'Don\'t worry about it'}
        </div>
    )
}

export default Task
