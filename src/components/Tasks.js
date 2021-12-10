import Task from './Task'

const Tasks = ({ tasks, onDelete123, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete123} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
