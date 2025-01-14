import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
        id: `task-${Date.now()},`, 
      content,
    };
    onAddTask(newTask);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mt-3">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter task content"
        className="form-control me-2"
      />
      <button type="submit" className="btn btn-success">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
