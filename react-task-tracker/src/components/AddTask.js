import React from 'react'
import {useState} from 'react'

export const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const appendTask = (e) => {
        e.preventDefault()

        if (!text) {
            alert('please add text')
            return 
        }

        onAdd({text, day, reminder})
        setText('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={appendTask}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder='task name'
                >
                </input>
            </div>
            <div className='form-control'>
                <label>Date and Time</label>
                <input 
                    type='text' 
                    value={day} 
                    onChange={(e) => setDate(e.target.value)} 
                    placeholder='date and time'
                >
                </input>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input 
                    type='checkbox' 
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)} 
                >
                </input>
            </div>
            <button className='btn btn-block'>Update the Business</button>    
        </form>
    )
}
