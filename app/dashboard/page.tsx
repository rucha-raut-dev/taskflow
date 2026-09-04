import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Hero */}
        <section className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-400">
              TASKFLOW DASHBOARD
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              Stay organized. Get more done.
            </h1>

            <p className="mt-4 leading-7 text-slate-300">
              Manage your tasks, track your progress, and keep your
              productivity on track from one simple workspace.
            </p>

            <Link
              href="/tasks"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View My Tasks →
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm text-slate-500">Total Tasks</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">12</h2>
            <p className="mt-2 text-xs font-medium text-blue-600">
              All your tasks
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm text-slate-500">Completed</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">8</h2>
            <p className="mt-2 text-xs font-medium text-green-600">
              Great progress
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm text-slate-500">Pending</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">4</h2>
            <p className="mt-2 text-xs font-medium text-orange-600">
              Keep going
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm text-slate-500">Productivity</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">67%</h2>
            <p className="mt-2 text-xs font-medium text-purple-600">
              This week
            </p>
          </div>

        </section>

        {/* Progress + Quick Actions */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Weekly Progress
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your current task completion rate
                </p>
              </div>

              <span className="text-2xl font-bold text-blue-600">
                67%
              </span>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[67%] rounded-full bg-blue-600" />
            </div>

            <p className="mt-4 text-sm text-slate-500">
              You're doing well. Complete a few more tasks to reach your goal.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Quick Actions
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">

              <Link
                href="/tasks"
                className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <p className="font-semibold text-slate-800">
                  ✅ Manage Tasks
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  View and organize tasks
                </p>
              </Link>

              <Link
                href="/profile"
                className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <p className="font-semibold text-slate-800">
                  👤 My Profile
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  View your account
                </p>
              </Link>

            </div>
          </div>

        </section>

      </div>
    </main>
  );
}