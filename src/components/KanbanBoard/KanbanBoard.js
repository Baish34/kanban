import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import KanbanColumn from "./KanbanColumn";
import ColumnForm from "./ColumnForm";
import useLocalStorage from "../../hooks/useLocalStorage";


function KanbanBoard() {
  const [columns, setColumns] = useLocalStorage("kanban-columns", []);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumnIndex = columns.findIndex(
      (col) => col.id === source.droppableId
    );
    const destinationColumnIndex = columns.findIndex(
      (col) => col.id === destination.droppableId
    );

    const sourceColumn = columns[sourceColumnIndex];
    const destinationColumn = columns[destinationColumnIndex];

    const sourceTasks = [...sourceColumn.tasks];
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (sourceColumnIndex === destinationColumnIndex) {
      sourceTasks.splice(destination.index, 0, movedTask);
      const updatedColumns = [...columns];
      updatedColumns[sourceColumnIndex].tasks = sourceTasks;
      setColumns(updatedColumns);
    } else {
      const destinationTasks = [...destinationColumn.tasks];
      destinationTasks.splice(destination.index, 0, movedTask);

      const updatedColumns = [...columns];
      updatedColumns[sourceColumnIndex].tasks = sourceTasks;
      updatedColumns[destinationColumnIndex].tasks = destinationTasks;

      setColumns(updatedColumns);
    }
  };

  const addColumn = (name) => {
    const newColumn = {
      id: `column-${Date.now()}`,
      name,
      tasks: [],
    };
    const updatedColumns = [...columns, newColumn];
    setColumns(updatedColumns);
  };

  return (
    <div className="container py-4">
      <ColumnForm onAddColumn={addColumn} />
      <DragDropContext
        onDragEnd={(result) => {
          console.log("Drag Result:", result);
          handleDragEnd(result);
        }}
      >
        <div className="kanban-board d-flex gap-4">
          {columns.map((column) => (
            <KanbanColumn
              key={column.id}
              column={column}
              setColumns={setColumns}
              columns={columns}
            />
          ))}
        </div>
      </DragDropContext>

    </div>
  );
}

export default KanbanBoard;
