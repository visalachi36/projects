import { useState } from "react";
import { addTask } from "../api.js";

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return alert("Title is required!");

        const newTask = { title, description, status: "Pending" };
        const createdTask = await addTask(newTask);

        if (createdTask) {
            onTaskAdded(createdTask);
            setTitle("");
            setDescription("");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required style={styles.input} />
            <input type="text" placeholder="Description (Optional)" value={description} onChange={(e) => setDescription(e.target.value)} style={styles.input} />
            <button type="submit" style={styles.button}>Add Task</button>
        </form>
    );
};

const styles = {
    form: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" },
    input: { padding: "8px", border: "1px solid #ddd", borderRadius: "5px", width: "100%" },
    button: { padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }
};

export default TaskForm;
