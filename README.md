# Todo App

A simple and polished todo app built with **React** and **Vite**.

## Features

- Add, edit, mark as done/undone, and delete tasks
- Filter tasks with tabs: **All**, **Open**, and **Completed**, each showing its task count
- Live counter of open tasks in the header
- Tasks are saved to `localStorage` so they persist across page reloads
- Empty states and accessible labels when a list has no tasks

## Tech Stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- [Font Awesome](https://fontawesome.com) icons

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Open-task counter
│   ├── Tabs.jsx        # All / Open / Completed filter tabs
│   ├── TodoCard.jsx    # Single task with Done, Edit, and Delete actions
│   ├── TodoInput.jsx   # Form to add new tasks
│   └── TodoList.jsx    # Filters and renders the list of TodoCard items
└── App.jsx             # State management + localStorage sync
```

## Getting Started

```bash
npm install
npm run dev
```

Open the URL printed in your terminal (default: `http://localhost:5173`).

## Available Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Build for production       |
| `npm run preview` | Preview the production build |
| `npm run lint`  | Run ESLint                 |