import { useState } from "react";

export function TodoInput({ onAddTodo }) {
  const [taskText, setTaskText] = useState("");

  function handleTextChange(event) {
    setTaskText(event.target.value);
  }

  function handleSubmit(event) {
    // A form normally reloads the page. Keep this form inside React.
    event.preventDefault();

    const trimmedText = taskText.trim();
    if (trimmedText === "") return;

    onAddTodo(trimmedText);
    setTaskText(""); // Clear the input after adding the task.
  }

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        aria-label="New task"
        placeholder="Add task"
        value={taskText}
        onChange={handleTextChange}
      />
      <button type="submit" disabled={taskText.trim() === ""} aria-label="Add task">
        <i className="fa-solid fa-plus" aria-hidden="true"></i>
        Add
      </button>
    </form>
  );
}
