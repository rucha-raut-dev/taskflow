import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 shadow-2xl sm:p-12">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute -bottom-20 right-40 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
              ✨ YOUR PRODUCTIVITY SPACE
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Turn your plans into
              <span className="text-blue-400"> progress.</span>
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Organize your tasks, track your progress and stay focused
              with your personal TaskFlow workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/tasks"
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                View Tasks →
              </Link>

              <Link
                href="/profile"
                className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10"
              >
                My Profile
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["12", "Total Tasks", "📋", "text-blue-600", "bg-blue-50"],
            ["8", "Completed", "✓", "text-green-600", "bg-green-50"],
            ["4", "In Progress", "◷", "text-orange-600", "bg-orange-50"],
            ["67%", "Productivity", "⚡", "text-purple-600", "bg-purple-50"],
          ].map(([value, label, icon, text, bg]) => (
            <div
              key={label}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg} ${text} text-lg`}>
                {icon}
              </div>

              <p className="mt-5 text-sm text-slate-500">
                {label}
              </p>

              <p className={`mt-1 text-3xl font-bold text-slate-900`}>
                {value}
              </p>
            </div>
          ))}

        </section>

        {/* Bottom */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Progress */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  THIS WEEK
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Productivity
                </h2>
              </div>

              <span className="text-3xl font-bold text-slate-900">
                67%
              </span>
            </div>

            <div className="mt-7 h-4 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[67%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
            </div>

            <div className="mt-4 flex justify-between text-xs text-slate-400">
              <span>8 completed</span>
              <span>12 total tasks</span>
            </div>
          </div>

          {/* Quick actions */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">
              QUICK ACTIONS
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              What do you want to do?
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              <Link
                href="/tasks"
                className="group rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
              >
                <span className="text-2xl">✅</span>
                <p className="mt-3 font-semibold text-slate-800">
                  Manage Tasks
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Organize your work
                </p>
              </Link>

              <Link
                href="/settings"
                className="group rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-50"
              >
                <span className="text-2xl">⚙️</span>
                <p className="mt-3 font-semibold text-slate-800">
                  Settings
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Customize TaskFlow
                </p>
              </Link>

            </div>
          </div>

        </section>
      </div>
    </main>
  );
}