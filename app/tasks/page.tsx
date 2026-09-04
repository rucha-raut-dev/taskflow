"use client";

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: "High" | "Medium" | "Low";
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Complete Next.js learning",
      description: "Study routing, components and layouts.",
      completed: true,
      priority: "High",
    },
    {
      id: 2,
      title: "Improve TaskFlow UI",
      description: "Make the application more modern and responsive.",
      completed: false,
      priority: "Medium",
    },
    {
      id: 3,
      title: "Prepare project demo",
      description: "Explain features and technologies used.",
      completed: false,
      priority: "High",
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              TASK WORKSPACE
            </div>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              My Tasks
            </h1>

            <p className="mt-2 text-slate-500">
              Keep your work organized and stay on track.
            </p>
          </div>

          <button
            onClick={() => alert("Add Task feature coming soon!")}
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            + Add New Task
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Tasks</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {tasks.length}
            </p>
          </div>

          <div className="rounded-2xl border border-green-100 bg-green-50/50 p-5">
            <p className="text-sm text-green-600">Completed</p>
            <p className="mt-2 text-3xl font-bold text-green-700">
              {completed}
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-5">
            <p className="text-sm text-orange-600">Remaining</p>
            <p className="mt-2 text-3xl font-bold text-orange-700">
              {tasks.length - completed}
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="mt-8">
          <div className="relative">
            <span className="absolute left-4 top-3.5 text-slate-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search your tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-5 text-sm outline-none shadow-sm transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
          </div>
        </div>

        {/* Task List */}
        <div className="mt-6 space-y-4">

          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">

                {/* Checkbox */}
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition ${
                    task.completed
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-slate-300 hover:border-blue-500 hover:bg-blue-50"
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

                    <div className="flex gap-2">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          task.priority === "High"
                            ? "bg-red-50 text-red-600"
                            : task.priority === "Medium"
                            ? "bg-yellow-50 text-yellow-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {task.priority}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          task.completed
                            ? "bg-green-50 text-green-600"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {task.completed ? "Completed" : "In Progress"}
                      </span>

                    </div>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {task.description}
                  </p>
                </div>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="rounded-xl px-3 py-2 text-xs font-medium text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}