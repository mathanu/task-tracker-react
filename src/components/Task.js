import { FaTimes } from 'react-icons/fa'

const Task = ({taskFunc}) => {
    return (
        <div className="task">
            <h3>{taskFunc.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} /> </h3>
            <h3>{taskFunc.day}</h3>
        </div>
    )
}

export default Task;