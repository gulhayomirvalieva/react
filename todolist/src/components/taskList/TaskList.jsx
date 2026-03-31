import "./TaskList.css";
const TaskList = () => {
  return (
    <div>
      <ul>
        <li>
          <span>Reading book</span>
          <button className="done">done</button>
          <button className="update">Edit</button>
          <button className="delete">delete</button>
        </li>
        <li>
          <span>Play football</span>
          <button className="done">done</button>
          <button className="update">Edit</button>
          <button className="delete">delete</button>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
