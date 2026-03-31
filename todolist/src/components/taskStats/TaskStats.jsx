import "./TaskStats.css";
const TaskStats = () => {
  return (
    <div className="task-stats">
      <p>Total tasks: 4</p>
      <p>Completed tasks: 1</p>
      <p>Incomplete tasks: 3</p>
      <div className="btns">
        <button>Delete Completed Tasks</button>
        <button>Mark All Tasks As Completed</button>
        <button>Clear All Tasks</button>
      </div>
    </div>
  );
};

export default TaskStats;
