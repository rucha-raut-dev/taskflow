"use client";

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      title: task.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Complete / uncomplete task
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Delete task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // Statistics
  const completedTasks = tasks.filter(
    (item) => item.completed
  ).length;

  const pendingTasks = tasks.length - completedTasks;

  // Search + filter
  const filteredTasks = tasks.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
        ? !item.completed
        : item.completed;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              TaskFlow
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Stay organized. Get things done.
            </p>
          </div>

          <div className="hidden rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 sm:block">
            Task Manager
          </div>

        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-8">

        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Your Tasks
          </h2>

          <p className="mt-2 text-slate-500">
            Manage your daily tasks and stay productive.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Total */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Tasks
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {tasks.length}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                📋
              </div>

            </div>
          </div>

          {/* Completed */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Completed
                </p>

                <p className="mt-2 text-3xl font-bold text-green-600">
                  {completedTasks}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl">
                ✓
              </div>

            </div>
          </div>

          {/* Pending */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Pending
                </p>

                <p className="mt-2 text-3xl font-bold text-orange-500">
                  {pendingTasks}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-xl">
                ⏳
              </div>

            </div>
          </div>

        </div>

        {/* Add Task Card */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-4">
            <h3 className="font-semibold text-slate-900">
              Add a new task
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Enter a task and add it to your list.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
              placeholder="e.g. Learn Next.js"
              className="flex-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />

            <button
              onClick={addTask}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95"
            >
              + Add Task
            </button>

          </div>
        </div>

        {/* Search & Filters */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          {/* Search */}
          <div className="relative">

            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your tasks..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />

          </div>

          {/* Filters */}
          <div className="mt-4 flex flex-wrap gap-2">

            <button
              onClick={() => setFilter("all")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("active")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                filter === "active"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Active
            </button>

            <button
              onClick={() => setFilter("completed")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                filter === "completed"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Completed
            </button>

          </div>
        </div>

        {/* Task List */}
        <div className="mt-6">

          <div className="mb-3 flex items-center justify-between">

            <h3 className="font-semibold text-slate-900">
              Task List
            </h3>

            <span className="text-sm text-slate-500">
              {filteredTasks.length}{" "}
              {filteredTasks.length === 1 ? "task" : "tasks"}
            </span>

          </div>

          <div className="space-y-3">

            {filteredTasks.length === 0 ? (

              /* Empty State */
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
                  📝
                </div>

                <h3 className="mt-4 font-semibold text-slate-900">
                  No tasks found
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Add a task or change your search/filter.
                </p>

              </div>

            ) : (

              filteredTasks.map((item) => (

                <div
                  key={item.id}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                >

                  <div className="flex min-w-0 items-center gap-4">

                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => toggleTask(item.id)}
                      className="h-5 w-5 cursor-pointer accent-blue-600"
                    />

                    {/* Task */}
                    <span
                      className={`truncate text-sm font-medium transition-all ${
                        item.completed
                          ? "text-slate-400 line-through"
                          : "text-slate-800"
                      }`}
                    >
                      {item.title}
                    </span>

                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => deleteTask(item.id)}
                    className="ml-4 rounded-lg px-3 py-2 text-sm font-medium text-red-500 opacity-70 transition-all hover:bg-red-50 hover:text-red-600 group-hover:opacity-100"
                  >
                    Delete
                  </button>

                </div>

              ))
            )}

          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6">

        <p className="text-center text-sm text-slate-400">
          Built with Next.js, React & Tailwind CSS
        </p>

      </footer>

    </main>
  );
}