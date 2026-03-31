import { useState } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import TaskList from "./components/taskList/TaskList";
import TaskStats from "./components/taskStats/TaskStats";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Reading book", completed: false },
    { id: 2, text: "Play football", completed: false },
  ]);

  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const markAllCompleted = () => {
    setTasks(tasks.map((task) => ({ ...task, completed: true })));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <Header />
      <Form onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTaskCompletion}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
      <TaskStats
        tasks={tasks}
        onClearCompleted={clearCompletedTasks}
        onMarkAllCompleted={markAllCompleted}
        onClearAll={clearAllTasks}
      />
    </div>
  );
};

export default App;
