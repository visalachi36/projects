import TaskList from "./components/TaskList";

function App() {
    return (
        <div style={styles.app}>
            <h1>Task Manager</h1>
            <TaskList />
        </div>
    );
}

const styles = {
    app: { maxWidth: "500px", margin: "auto", padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }
};

export default App;
