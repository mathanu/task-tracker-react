import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Drink Water',
      day: "coming sunday",
      reminder: true
    },
    {
      id: 2,
      text: 'Movie time',
      day: "coming saturdayy",
      reminder: true
    }
  ])
  return (
    <div className="container">
      <Header title="Task Tracker" onChangeTask={setTasks}/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
