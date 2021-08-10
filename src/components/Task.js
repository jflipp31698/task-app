import {FaTimes} from 'react-icons/fa';
const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)} > 
            <h3 className="text">{task.text} <FaTimes onClick={() => onDelete(task.id)} className="deleteIcon" style={{color: 'red' }}/></h3>
            <p className="day">{task.day}</p>
            <p className="dblClick"><i>Double Click To Toggle Reminder</i></p>
        </div>
    )
}

export default Task
