import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import TaskList from "./components/taskList/TaskList";
import TaskStats from "./components/taskStats/TaskStats";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Form />
      <TaskList />
      <TaskStats />
    </div>
  );
};

export default App;
