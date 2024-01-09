import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";

function AppUI(completedTasks, totalTasks, searchValue, setSearchValue, FoundTasks, tasksComplete, deleteTask) {
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

export { AppUI };