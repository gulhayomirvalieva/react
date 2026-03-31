import "./TaskList.css";

const TaskList = ({ tasks, onToggleTask, onDeleteTask, onEditTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <button className="done" onClick={() => onToggleTask(task.id)}>
              {task.completed ? "Done" : "Done"}
            </button>
            <button
              className="update"
              onClick={() => {
                const newText = prompt("Edit task:", task.text);
                if (newText) onEditTask(task.id, newText);
              }}
            >
              Edit
            </button>
            <button className="delete" onClick={() => onDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
