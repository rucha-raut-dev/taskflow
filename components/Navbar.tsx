import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-6 py-4 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Task<span className="text-blue-600">Flow</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Dashboard
          </Link>

          <Link
            href="/tasks"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Tasks
          </Link>

          <Link
            href="/profile"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Profile
          </Link>

          <Link
            href="/settings"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Settings
          </Link>

        </div>
      </div>
    </nav>
  );
}