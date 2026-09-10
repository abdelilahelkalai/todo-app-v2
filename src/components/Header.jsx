export function Header({ todos }) {
  const openTaskCount = todos.filter((todo) => !todo.complete).length;
  const taskOrTasks = openTaskCount === 1 ? "task" : "tasks";

  return (
    <header>
      <h1 className="text-gradient">
        You have {openTaskCount} open {taskOrTasks}.
      </h1>
    </header>
  );
}
