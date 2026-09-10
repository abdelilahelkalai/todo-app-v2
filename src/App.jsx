import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const selectedTab = "Completed";
  const todos = [
    { id: 1, input: "Hello! Add your first todo!", complete: true },
    { id: 2, input: "Get the groceries!", complete: false },
    { id: 3, input: "Learn how to web design", complete: false },
    { id: 4, input: "Say hi to gran gran", complete: true },
  ];
  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} />
      <TodoList todos={todos} selectedTab={selectedTab} />
      <TodoInput />
    </>
  );
}

export default App;
