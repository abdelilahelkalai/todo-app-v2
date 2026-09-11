import { useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

const storageKey = "todo-app.tasks";

// Read saved tasks once when the app starts.
function loadTodos() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(saved)) {
      return saved
        .filter((todo) => todo && typeof todo.input === "string" &&
          typeof todo.complete === "boolean")
        .map((todo) => ({ ...todo, id: crypto.randomUUID() }));
    }
  } catch {
    // Start with an empty list if saved data cannot be read.
  }
  return [];
}

function App() {
  // State remembers values and updates the screen when they change.
  const [selectedTab, setSelectedTab] = useState("All");
  const [todos, setTodos] = useState(loadTodos);
  const [storageError, setStorageError] = useState("");

  // Keep the screen and the browser's saved copy in sync.
  function updateTodos(nextTodos) {
    setTodos(nextTodos);
    try {
      localStorage.setItem(storageKey, JSON.stringify(nextTodos));
      setStorageError("");
    } catch {
      setStorageError("Your tasks work here, but could not be saved in this browser.");
    }
  }

  function handleAddTodo(input) {
    const text = input.trim();
    if (!text) return;
    const newTodo = {
      id: crypto.randomUUID(),
      input: text,
      complete: false,
    };

    // Copy the existing tasks and add the new task at the end.
    const updatedTodos = [...todos, newTodo];
    updateTodos(updatedTodos);
    setSelectedTab("All");
  }

  function handleEditTodo(id, input) {
    const text = input.trim();
    if (!text) return;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // Copy this task and replace only its text.
        return { ...todo, input: text };
      }
      return todo;
    });

    updateTodos(updatedTodos);
  }

  function handleToggleTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // ! switches true to false, or false to true.
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    updateTodos(updatedTodos);
  }

  function handleDeleteTodo(id) {
    // Keep every task except the one with the matching ID.
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    updateTodos(remainingTodos);
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      {storageError && <p role="alert">{storageError}</p>}
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        onEditTodo={handleEditTodo}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <TodoInput onAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
