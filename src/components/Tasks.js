import Task from './Task';

const Tasks = ({tasks}) => {
    return (
        <>
        {tasks.map((task)=> (
            <Task taskFunc={task}/>
        ))}
        </>
    )
}

export default Tasks;