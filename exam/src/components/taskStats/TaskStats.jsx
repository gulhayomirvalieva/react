import "./TaskStats.css";

const TaskStats = ({
  tasks 
}) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const incompleteTasks = totalTasks - completedTasks;

  return (
    <div className="task-stats">
      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
      <p>Incomplete tasks: {incompleteTasks}</p>
      <div className="btns">
        <button >Delete Completed Tasks</button>
        <button >
          Mark All Tasks As Completed
        </button>
        <button >Clear All Tasks</button>
      </div>
    </div>
  );
};

export default TaskStats;
