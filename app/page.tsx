"use client";

import { useEffect, useMemo, useState } from "react";

type Priority = "High" | "Medium" | "Low";

type Task = {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Complete Next.js learning",
    priority: "High",
    completed: true,
  },
  {
    id: 2,
    title: "Improve TaskFlow UI",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "Prepare project demo",
    priority: "High",
    completed: false,
  },
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<
    "All" | "Active" | "Completed"
  >("All");

  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [toast, setToast] = useState("");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("taskflow-tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const addTask = () => {
    if (!newTask.trim()) {
      showToast("Please enter a task name");
      return;
    }

    const task: Task = {
      id: Date.now(),
      title: newTask.trim(),
      priority,
      completed: false,
    };

    setTasks((current) => [task, ...current]);

    setNewTask("");
    setPriority("Medium");
    setShowModal(false);

    showToast("Task added successfully 🎉");
  };

  const toggleTask = (id: number) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );

    showToast("Task status updated ✓");
  };

  const deleteTask = (id: number) => {
    setTasks((current) =>
      current.filter((task) => task.id !== id)
    );

    showToast("Task deleted");
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All"
          ? true
          : filter === "Active"
          ? !task.completed
          : task.completed;

      return matchesSearch && matchesFilter;
    });
  }, [tasks, search, filter]);

  return (
    <main className="min-h-screen bg-[#f7f9fc]">

      {/* Toast */}
      {toast && (
        <div className="fixed right-5 top-24 z-[100] animate-[slideIn_.3s_ease-out]">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-2xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
              ✓
            </div>

            <p className="text-sm font-semibold text-slate-700">
              {toast}
            </p>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

        {/* Welcome Section */}
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-10 shadow-2xl sm:px-10">

          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />

          <div className="absolute -bottom-32 left-1/2 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-blue-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                WORKSPACE ACTIVE
              </div>

              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Good morning,
                <span className="text-blue-400"> Rucha.</span>
              </h1>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Stay focused, organize your work and turn
                your plans into progress.
              </p>

              <button
                onClick={() => setShowModal(true)}
                className="mt-7 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                + Create New Task
              </button>
            </div>

            {/* Progress Circle */}
            <div className="flex items-center justify-center">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur">

                <div
                  className="absolute inset-3 rounded-full"
                  style={{
                    background: `conic-gradient(#3b82f6 ${progress}%, rgba(255,255,255,0.08) ${progress}% 100%)`,
                  }}
                />

                <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full bg-slate-950">
                  <span className="text-3xl font-bold text-white">
                    {progress}%
                  </span>

                  <span className="text-xs text-slate-500">
                    completed
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Stats */}
        <section className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon="📋"
            label="Total Tasks"
            value={tasks.length}
            description="All tasks"
            iconClass="bg-blue-50 text-blue-600"
          />

          <StatCard
            icon="✓"
            label="Completed"
            value={completedTasks}
            description="Great progress"
            iconClass="bg-green-50 text-green-600"
          />

          <StatCard
            icon="◷"
            label="Active"
            value={activeTasks}
            description="Needs attention"
            iconClass="bg-orange-50 text-orange-600"
          />

          <StatCard
            icon="⚡"
            label="Progress"
            value={`${progress}%`}
            description="Completion rate"
            iconClass="bg-purple-50 text-purple-600"
          />

        </section>

        {/* Main Content */}
        <section className="mt-7 grid gap-7 lg:grid-cols-[1fr_300px]">

          {/* Tasks */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">

            {/* Header */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  TASK MANAGEMENT
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Your Tasks
                </h2>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
              >
                + Add Task
              </button>

            </div>

            {/* Search */}
            <div className="relative mt-6">

              <span className="absolute left-4 top-3.5 text-slate-400">
                🔍
              </span>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your tasks..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
              />

            </div>

            {/* Filters */}
            <div className="mt-5 flex gap-2 overflow-x-auto pb-1">

              {(["All", "Active", "Completed"] as const).map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      filter === item
                        ? "bg-slate-900 text-white shadow-md"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}

            </div>

            {/* Task List */}
            <div className="mt-6 space-y-3">

              {filteredTasks.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 py-14 text-center">
                  <div className="text-4xl">🔎</div>

                  <p className="mt-3 font-semibold text-slate-700">
                    No tasks found
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Try another search or filter.
                  </p>
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                  />
                ))
              )}

            </div>

          </div>

          {/* Right Panel */}
          <aside className="space-y-5">

            {/* Today's Focus */}
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">

              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900">
                  Today's Focus
                </h3>

                <span className="text-xl">🎯</span>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete your important tasks first and
                keep your momentum going.
              </p>

              <div className="mt-5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">
                    Daily progress
                  </span>

                  <span className="font-bold text-blue-600">
                    {progress}%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-700"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-xl">

              <h3 className="font-bold">
                Quick Actions
              </h3>

              <div className="mt-4 space-y-2">

                <button
                  onClick={() => setShowModal(true)}
                  className="flex w-full items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/15"
                >
                  <span>➕</span>
                  <span>Create a task</span>
                </button>

                <button
                  onClick={() => setFilter("Active")}
                  className="flex w-full items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/15"
                >
                  <span>🔥</span>
                  <span>View active tasks</span>
                </button>

                <button
                  onClick={() => setFilter("Completed")}
                  className="flex w-full items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/15"
                >
                  <span>🏆</span>
                  <span>View completed</span>
                </button>

              </div>

            </div>

            {/* Motivational Card */}
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">

              <div className="text-2xl">💡</div>

              <p className="mt-3 font-semibold text-slate-800">
                Small progress is still progress.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Keep completing your tasks one step at a time.
              </p>

            </div>

          </aside>

        </section>

      </div>

      {/* Add Task Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/50 px-5 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-[2rem] bg-white p-7 shadow-2xl">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  NEW TASK
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Create a task
                </h2>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
              >
                ✕
              </button>

            </div>

            <div className="mt-6">

              <label className="text-sm font-semibold text-slate-700">
                Task name
              </label>

              <input
                autoFocus
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addTask();
                  }
                }}
                placeholder="e.g. Learn React hooks"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              />

            </div>

            <div className="mt-5">

              <label className="text-sm font-semibold text-slate-700">
                Priority
              </label>

              <div className="mt-2 grid grid-cols-3 gap-2">

                {(["Low", "Medium", "High"] as Priority[]).map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => setPriority(item)}
                      className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                        priority === item
                          ? item === "High"
                            ? "border-red-300 bg-red-50 text-red-600"
                            : item === "Medium"
                            ? "border-yellow-300 bg-yellow-50 text-yellow-600"
                            : "border-green-300 bg-green-50 text-green-600"
                          : "border-slate-200 text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}

              </div>

            </div>

            <div className="mt-7 flex gap-3">

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={addTask}
                className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
              >
                Create Task
              </button>

            </div>

          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </main>
  );
}

/* ---------------- STAT CARD ---------------- */

function StatCard({
  icon,
  label,
  value,
  description,
  iconClass,
}: {
  icon: string;
  label: string;
  value: string | number;
  description: string;
  iconClass: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-500">
            {label}
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {description}
          </p>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg transition duration-300 group-hover:scale-110 ${iconClass}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

/* ---------------- TASK CARD ---------------- */

function TaskCard({
  task,
  onToggle,
  onDelete,
}: {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  const priorityStyle =
    task.priority === "High"
      ? "bg-red-50 text-red-600"
      : task.priority === "Medium"
      ? "bg-yellow-50 text-yellow-600"
      : "bg-green-50 text-green-600";

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">

      <div className="flex items-center gap-4">

        {/* Checkbox */}
        <button
          onClick={() => onToggle(task.id)}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition duration-300 ${
            task.completed
              ? "border-green-500 bg-green-500 text-white"
              : "border-slate-300 text-transparent hover:border-blue-500 hover:bg-blue-50"
          }`}
        >
          ✓
        </button>

        {/* Content */}
        <div className="min-w-0 flex-1">

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

            <p
              className={`font-semibold ${
                task.completed
                  ? "text-slate-400 line-through"
                  : "text-slate-800"
              }`}
            >
              {task.title}
            </p>

            <span
              className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${priorityStyle}`}
            >
              {task.priority}
            </span>

          </div>

          <p className="mt-1 text-xs text-slate-400">
            {task.completed
              ? "Completed successfully"
              : "Ready to be completed"}
          </p>

        </div>

        {/* Delete */}
        <button
          onClick={() => onDelete(task.id)}
          className="rounded-lg px-3 py-2 text-xs font-medium text-slate-300 opacity-0 transition group-hover:opacity-100 hover:bg-red-50 hover:text-red-500"
        >
          Delete
        </button>

      </div>

    </div>
  );
}