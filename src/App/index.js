import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage  } from "./useLocalStorage";

/* const DefaultTasks = [
  {taskDescription: "Start to learn React", completed: true},
  {taskDescription: "Learn English", completed: false},
  {taskDescription: "Get better job", completed: false},
  {taskDescription: "Update CV", completed: true},
  {taskDescription: "Uninstall games", completed: true}
]
localStorage.setItem('TaskList_v1', DefaultTasks); */

function App() {
  const [tasks, saveTasks] = useLocalStorage('TaskList_v1', []);
  const [searchValue, setSearchValue] = React.useState("");
  console.log(`escribiste en el to do serach:  ${searchValue}`);

  const completedTasks = tasks.filter((task) => !!task.completed).length; // !!task.completed retorna true o false
  const totalTasks = tasks.length;
  const FoundTasks = tasks.filter((task) => task.taskDescription.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  const tasksComplete = (taskName) => {
    const newTaskArray = [...tasks];
    const taskIndex = newTaskArray.findIndex((task) => task.taskDescription == taskName);
    newTaskArray[taskIndex].completed = true;
    saveTasks(newTaskArray);
  };
  const deleteTask = (taskName) => {
    const newTaskArray = [...tasks];
    const taskIndex = newTaskArray.findIndex((task) => task.taskDescription == taskName);
    newTaskArray.splice(taskIndex, 1);
    saveTasks(newTaskArray);
  };

  return(
    <AppUI 
     completedTasks={completedTasks}
     totalTasks={totalTasks}
     searchValue={searchValue}
     setSearchValue={setSearchValue}
     FoundTasks={FoundTasks}
     tasksComplete={tasksComplete}
     deleteTask={deleteTask}
    />
  )

}

export default App;
