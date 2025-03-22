import { deleteTask } from "../api.js";

const TaskItem = ({ task, onTaskDeleted }) => {
    const handleDelete = async () => {
        await deleteTask(task._id);
        onTaskDeleted(task._id);
    };

    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "5px" }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>Delete</button>
        </div>
    );
};

export default TaskItem;
