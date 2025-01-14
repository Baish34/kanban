import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

function KanbanColumn({ column, setColumns = () => {}, columns = []}) {
  const addTask = (task) => {
    const updatedColumns = columns.map((col) =>
      col.id === column.id
        ? { ...col, tasks: [...col.tasks, task] }
        : col
    );
    setColumns(updatedColumns);
  };

  const deleteColumn = () => {
    const updatedColumns = columns.filter((col) => col.id !== column.id);

    setColumns(updatedColumns);
  };

  return (
    <div className="kanban-column card p-3">
      <h5 className="card-title">{column.name}</h5>
      <button
        onClick={deleteColumn}
        className="btn btn-danger btn-sm mb-3"
      >
        Delete Column
      </button>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {column.tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <TaskForm onAddTask={addTask} />
    </div>
  );
}

export default KanbanColumn;

