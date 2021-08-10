import Button from "./Button"
import { useState } from "react"
const AddForm = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert("Please Add Task")
            return
        }

        if(!day){
            alert("Please Add Day & Time")
            return
        }


        onAdd( { text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Task Title</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            <label>Day & Time</label>
            <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
            <div className="reminderForm">
                <label>Set Reminder</label>
                <input className="checkbox" type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <Button text="Save Task" color="blue" />
        </form>
    )
}

export default AddForm
