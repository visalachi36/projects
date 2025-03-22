const API_URL = "http://localhost:5000/tasks";

// ✅ Fetch tasks
export const fetchTasks = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Fetched tasks:", data); // Debugging log
        return data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
};

// ✅ Add task
export const addTask = async (task) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });

        const data = await response.json();
        console.log("Task added:", data); // Debugging log
        return data;
    } catch (error) {
        console.error("Error adding task:", error);
        return null;
    }
};

// ✅ Delete task
export const deleteTask = async (taskId) => {
    try {
        const response = await fetch(`${API_URL}/${taskId}`, {
            method: "DELETE",
        });

        const data = await response.json();
        console.log("Task deleted:", data); // Debugging log
        return data;
    } catch (error) {
        console.error("Error deleting task:", error);
    }
};
