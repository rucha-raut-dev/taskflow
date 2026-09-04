"use client";

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Pending";
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn Next.js",
      description: "Practice routing and components",
      status: "Completed",
    },
    {
      id: 2,
      title: "Design TaskFlow",
      description: "Improve the dashboard UI",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Update GitHub",
      description: "Push the latest project changes",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <p className="text-sm font-medium text-blue-600">
                Task Management
              </p>

              <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                My Tasks
              </h1>

              <p className="mt-2 text-slate-500">
                Manage your work and keep track of your progress.
              </p>
            </div>

            <button
              onClick={() => alert("Add Task feature coming soon!")}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              + Add New Task
            </button>

          </div>

        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Search */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />
          </div>

        </div>

        {/* Task Summary */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Tasks</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              {tasks.length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Completed</p>
            <p className="mt-2 text-2xl font-bold text-green-600">
              {tasks.filter((task) => task.status === "Completed").length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Pending</p>
            <p className="mt-2 text-2xl font-bold text-orange-500">
              {tasks.filter((task) => task.status !== "Completed").length}
            </p>
          </div>

        </div>

        {/* Task List */}
        <div className="mt-8">

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              All Tasks
            </h2>

            <span className="text-sm text-slate-500">
              {filteredTasks.length} tasks
            </span>
          </div>

          <div className="space-y-4">

            {filteredTasks.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                <div className="text-4xl">📝</div>

                <h3 className="mt-4 font-semibold text-slate-900">
                  No tasks found
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Try searching for something else.
                </p>
              </div>
            ) : (
              filteredTasks.map((task) => (

                <div
                  key={task.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-lg font-semibold text-slate-900">
                          {task.title}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            task.status === "Completed"
                              ? "bg-green-50 text-green-700"
                              : task.status === "In Progress"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-orange-50 text-orange-700"
                          }`}
                        >
                          {task.status}
                        </span>

                      </div>

                      <p className="mt-2 text-sm text-slate-500">
                        {task.description}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="rounded-lg px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))
            )}

          </div>

        </div>

      </div>

    </main>
  );
}