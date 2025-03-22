import { useState, useEffect } from "react";
import { fetchTasks } from "../api.js";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks().then(setTasks);
    }, []);

    const handleTaskAdded = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleTaskDeleted = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter(task => task._id !== taskId));
    };

    return (
        <div>
            <h2>Task List</h2>
            <TaskForm onTaskAdded={handleTaskAdded} />
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                tasks.map((task) => <TaskItem key={task._id} task={task} onTaskDeleted={handleTaskDeleted} />)
            )}
        </div>
    );
};

export default TaskList;
