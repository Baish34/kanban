
import React from "react";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <h1 className="mb-4 text-center text-primary">Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
}

export default App;
