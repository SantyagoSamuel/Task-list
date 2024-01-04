import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";

/* const DefaultTasks = [
  {taskDescription: "Start to learn React", completed: true},
  {taskDescription: "Learn English", completed: false},
  {taskDescription: "Get better job", completed: false},
  {taskDescription: "Update CV", completed: true},
  {taskDescription: "Uninstall games", completed: true}
]
localStorage.setItem('TaskList_v1', DefaultTasks); */
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveNewItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveNewItem]
}

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

  return (
    <>
      <ToDoCounter completed={completedTasks} total={totalTasks} />
      <ToDoSearch
        serachValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {FoundTasks.map((task) => (
          <ToDoItem
            key={task.taskDescription}
            taskValue={task.taskDescription}
            completed={task.completed}
            onComplete={() => tasksComplete(task.taskDescription)}
            onDelete={() => deleteTask(task.taskDescription)}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </>
  );
}

export default App;
