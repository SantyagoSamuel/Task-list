import React from 'react';
import { ToDoIcon } from './ToDoIcon.js';

function CompleteIcon( { completed, onComplete} ) {
    return (
        <ToDoIcon 
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon };