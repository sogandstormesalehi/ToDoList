import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Write Something First!')
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type = 'text' placeholder='Text'
                 value = {text} onChange = {(e) => setText(e.target.value)}
                 />
            </div>
            <div className='form-control'>
                <label>Deadline</label>
                <input type = 'text' placeholder='Date'
                 value = {day} onChange = {(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Highlight</label>
                <input type = 'checkbox'
                 checked = {reminder}
                 value = {reminder} 
                 onChange = 
                 {(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type ='submit' value = 'Save' className = 'btn btn-block' />
        </form>
    )
}

export default AddTask
