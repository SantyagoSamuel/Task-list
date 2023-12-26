import React from 'react';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './ToDoItem.css';

function ToDoItem( {taskValue, completed, onComplete, onDelete} ){
    return(
      <li className="ToDoItem">
        <CompleteIcon />
        {/* <span 
          className={`Icon Icon-check ${completed && "Icon-check--active"}`} 
          onClick={onComplete}
        >
          V
        </span> */}
        <p className={`ToDoItem-p ${completed && "ToDoItem-p--complete"}`}>{taskValue}</p>
        {/* <span className="Icon Icon-delete" onClick={onDelete}>X</span> */}
        <DeleteIcon />
      </li>
    );
  }

  export { ToDoItem };