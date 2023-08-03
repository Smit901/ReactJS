import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Task1 from "./tasks/1/Task1";
import Task2 from "./tasks/2/Task2";
import Task3 from "./tasks/3/Task3";
import Task4 from "./tasks/4/Task4";

const tasks = [
  "1 - Create an input component that has an input element and another to display input data. While the user enters the data, it should immediately reflect on the view component.",
  "2 - Create an input component that has an input element and a button, and another to display input data once the user clicks the button. If the user updates the data it should only reflect on the view component when the user clicks the button.",
  "3 - Create an input component that has an input element and a button, and another to display input data once the user clicks the button. Once the user clicks the button it should clear the input box. If the input box is empty then the button should be disabled. At all clicks of the button, it should add input items in a list and show all the items in the list/view component as a list.",
  "4 - Create a component that have two child component one is the input component and another for view. The parent component should have an Add button. when the user clicks on the Add button it should add input text in a list as an item. The input component should contain the input element. The add button should be disabled when the input box is empty. The view/List component will display all the list items as a list and All list items will have a delete button. On click of the delete button, the item should be removed from the list.",
];

function App() {
  const [taskIndex, setTaskIndex] = useState(0);

  const taskView = {
    0: <Task1 />,
    1: <Task2 />,
    2: <Task3 />,
    3: <Task4 />,
  };

  return (
    <div className="container">
      <Sidebar
        taskIndex={taskIndex}
        setTaskIndex={setTaskIndex}
        tasks={tasks}
      />
      <div className="main">
        <Header task={tasks[taskIndex]} />
        {taskView[taskIndex]}
      </div>
    </div>
  );
}

export default App;
