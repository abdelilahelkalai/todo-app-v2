import { TodoCard } from "./TodoCard";

export function TodoList({ todos, selectedTab, onEditTodo, onToggleTodo, onDeleteTodo }) {
  // Start with all tasks, then narrow the list for the selected tab.
  let filteredTodos = todos;

  if (selectedTab === "Open") {
    filteredTodos = todos.filter((todo) => !todo.complete);
  } else if (selectedTab === "Completed") {
    filteredTodos = todos.filter((todo) => todo.complete);
  }

  return (
    <>
      {filteredTodos.length === 0 && <p role="status">No tasks in this list.</p>}
      {filteredTodos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onEditTodo={onEditTodo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </>
  );
}
