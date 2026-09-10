import { TodoCard } from "./TodoCard";

export function TodoList({ todos, selectedTab }) {
  const filteredTodos = todos.filter((todo) => {
    if (selectedTab === "Open") return !todo.complete;
    if (selectedTab === "Completed") return todo.complete;
    return true;
  });

  return (
    <>
      {filteredTodos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </>
  );
}
