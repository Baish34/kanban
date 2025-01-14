import React from "react";
import { Draggable } from "react-beautiful-dnd";

function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card card p-2 mb-3"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{task.content}</p>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
