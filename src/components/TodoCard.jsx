import { useState } from "react";

export function TodoCard({ todo, onEditTodo, onToggleTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.input);

  function handleStartEditing() {
    setEditedText(todo.input);
    setIsEditing(true);
  }

  function handleCancelEditing() {
    setIsEditing(false);
  }

  function handleTextChange(event) {
    setEditedText(event.target.value);
  }

  function handleSave(event) {
    event.preventDefault();
    if (!editedText.trim()) return;
    onEditTodo(todo.id, editedText);
    setIsEditing(false);
  }

  return (
    <div className="card todo-item" data-complete={todo.complete}>
      {isEditing ? (
        <form className="input-container" onSubmit={handleSave}>
          <input
            aria-label="Edit task"
            value={editedText}
            onChange={handleTextChange}
            autoFocus
          />
          <button type="submit" disabled={!editedText.trim()}>Save</button>
          <button type="button" onClick={handleCancelEditing}>Cancel</button>
        </form>
      ) : (
        <>
          <p>{todo.input}</p>
          <div className="todo-buttons">
            <button onClick={() => onToggleTodo(todo.id)}>
              <h6>{todo.complete ? "Undo" : "Done"}</h6>
            </button>
            <button onClick={handleStartEditing}>
              <h6>Edit</h6>
            </button>
            <button onClick={() => onDeleteTodo(todo.id)}>
              <h6>Delete</h6>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
