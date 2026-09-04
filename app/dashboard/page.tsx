import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome */}
        <section className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg">
          <p className="text-sm font-medium text-slate-300">
            Good to see you 👋
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Welcome to TaskFlow
          </h1>

          <p className="mt-2 max-w-xl text-slate-300">
            Organize your work, track your progress, and stay productive.
          </p>

          <Link
            href="/tasks"
            className="mt-6 inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            View My Tasks →
          </Link>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-medium text-slate-500">
              Total Tasks
            </p>
            <p className="mt-3 text-3xl font-bold text-slate-900">
              24
            </p>
            <p className="mt-2 text-sm text-slate-500">
              All your tasks
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-medium text-slate-500">
              Completed
            </p>
            <p className="mt-3 text-3xl font-bold text-green-600">
              16
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Great progress!
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-medium text-slate-500">
              In Progress
            </p>
            <p className="mt-3 text-3xl font-bold text-blue-600">
              5
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Currently working
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-medium text-slate-500">
              Pending
            </p>
            <p className="mt-3 text-3xl font-bold text-orange-500">
              3
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Need attention
            </p>
          </div>

        </section>

        {/* Bottom Section */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Progress */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Productivity
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your task completion progress
                </p>
              </div>

              <span className="text-2xl font-bold text-blue-600">
                67%
              </span>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[67%] rounded-full bg-blue-600" />
            </div>

            <p className="mt-3 text-sm text-slate-500">
              Keep going! You're making good progress.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Quick Actions
            </h2>

            <div className="mt-5 space-y-3">
              <Link
                href="/tasks"
                className="block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                + Add New Task
              </Link>

              <Link
                href="/profile"
                className="block rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Profile
              </Link>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}