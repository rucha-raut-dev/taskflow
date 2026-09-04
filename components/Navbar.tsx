import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 px-6 py-4 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-200 transition group-hover:scale-105">
            T
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            Task<span className="text-blue-600">Flow</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-1 sm:flex">
          <Link href="/" className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
            Home
          </Link>

          <Link href="/dashboard" className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
            Dashboard
          </Link>

          <Link href="/tasks" className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
            Tasks
          </Link>

          <Link href="/profile" className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
            Profile
          </Link>

          <Link href="/settings" className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600">
            Settings
          </Link>
        </div>

        {/* Avatar */}
        <Link
          href="/profile"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white shadow-md transition hover:scale-105"
        >
          RR
        </Link>

      </div>
    </nav>
  );
}