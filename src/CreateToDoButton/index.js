import React from "react";
import "./CreateToDoButton.css";

function CreateToDoButton() {
  return (
    <button
      className="CreateToDoButton"
      onClick={(event) => {
        console.log("click en Agregar tarea");
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateToDoButton };
