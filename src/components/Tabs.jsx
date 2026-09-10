export function Tabs({ todos, selectedTab }) {
  const tabs = ["All", "Open", "Completed"];
  const completedCount = todos.filter((todo) => todo.complete).length;
  const taskCounts = {
    All: todos.length,
    Open: todos.length - completedCount,
    Completed: completedCount,
  };

  return (
    <nav className="tab-container">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button${selectedTab === tab ? " tab-selected" : ""}`}
          aria-pressed={selectedTab === tab}
        >
          <h4>
            {tab}
            <span>({taskCounts[tab]})</span>
          </h4>
        </button>
      ))}
    </nav>
  );
}
