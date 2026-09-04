"use client";

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Complete Next.js learning",
      description: "Study routing, components and layouts.",
      completed: true,
    },
    {
      id: 2,
      title: "Improve TaskFlow UI",
      description: "Make the application more modern and responsive.",
      completed: false,
    },
    {
      id: 3,
      title: "Prepare project demo",
      description: "Explain features and technologies used.",
      completed: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const completed = tasks.filter((task) => task.completed).length;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              WORKSPACE
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              My Tasks
            </h1>

            <p className="mt-2 text-slate-500">
              Organize your work and stay productive.
            </p>
          </div>

          <button
            onClick={() => alert("Add Task feature coming soon!")}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            + Add New Task
          </button>
        </div>

        {/* Summary */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              {tasks.length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Completed</p>
            <p className="mt-2 text-2xl font-bold text-green-600">
              {completed}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Remaining</p>
            <p className="mt-2 text-2xl font-bold text-orange-500">
              {tasks.length - completed}
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Tasks */}
        <div className="mt-6 space-y-4">

          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">

                <button
                  onClick={() => toggleTask(task.id)}
                  className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition ${
                    task.completed
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-slate-300 hover:border-blue-500"
                  }`}
                >
                  {task.completed ? "✓" : ""}
                </button>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h2
                      className={`font-semibold ${
                        task.completed
                          ? "text-slate-400 line-through"
                          : "text-slate-900"
                      }`}
                    >
                      {task.title}
                    </h2>

                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                        task.completed
                          ? "bg-green-50 text-green-600"
                          : "bg-orange-50 text-orange-600"
                      }`}
                    >
                      {task.completed ? "Completed" : "In Progress"}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {task.description}
                  </p>
                </div>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

          {filteredTasks.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
              <p className="text-lg font-semibold text-slate-700">
                No tasks found
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Try searching for something else.
              </p>
            </div>
          )}

        </div>

      </div>
    </main>
  );
}