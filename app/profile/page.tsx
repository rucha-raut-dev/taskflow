export default function Profile() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-blue-600">
            Account
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your personal information and account details.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Cover */}
          <div className="h-32 bg-slate-900" />

          {/* Profile Info */}
          <div className="px-6 pb-8 sm:px-8">

            <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div className="flex items-end gap-4">

                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-blue-100 text-3xl font-bold text-blue-600 shadow-md">
                  RR
                </div>

                <div className="pb-1">
                  <h2 className="text-xl font-bold text-slate-900">
                    Rucha Raut
                  </h2>

                  <p className="text-sm text-slate-500">
                    Software Engineer Intern
                  </p>
                </div>

              </div>

              <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Edit Profile
              </button>

            </div>

            {/* Details */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Email
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  rucha@example.com
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Role
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  Software Engineer Intern
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Projects
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  TaskFlow
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Member Since
                </p>

                <p className="mt-2 font-medium text-slate-800">
                  2026
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}