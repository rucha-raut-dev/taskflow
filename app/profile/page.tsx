export default function Profile() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            ACCOUNT
          </div>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your personal information and account details.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">

          {/* Cover */}
          <div className="relative h-36 bg-gradient-to-r from-slate-950 via-blue-950 to-blue-700">
            <div className="absolute right-10 top-5 h-24 w-24 rounded-full bg-blue-400/20 blur-2xl" />
          </div>

          <div className="px-6 pb-8 sm:px-10">

            <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div className="flex items-end gap-4">

                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl font-bold text-white shadow-xl">
                  RR
                </div>

                <div className="pb-1">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Rucha Raut
                  </h2>

                  <p className="text-sm text-slate-500">
                    Software Engineer Intern
                  </p>
                </div>

              </div>

              <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700">
                Edit Profile
              </button>

            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-blue-50 p-5">
                <p className="text-sm text-blue-600">Projects</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  1
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-5">
                <p className="text-sm text-green-600">Tasks Completed</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  8
                </p>
              </div>

              <div className="rounded-2xl bg-purple-50 p-5">
                <p className="text-sm text-purple-600">Member Since</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  2026
                </p>
              </div>

            </div>

            {/* Details */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/30">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  Company Email
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/30">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Role
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  Software Engineer Intern
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/30">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Main Project
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  TaskFlow
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/30">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Technologies
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  Next.js · React · TypeScript
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}