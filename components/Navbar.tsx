import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 shadow">
      <Link href="/" className="text-2xl font-bold text-gray-900">
        TaskFlow
      </Link>

      <div className="flex gap-6">
        <Link
          href="/"
          className="text-gray-700 hover:text-black"
        >
          Home
        </Link>

        <Link
          href="/dashboard"
          className="text-gray-700 hover:text-black"
        >
          Dashboard
        </Link>

        <Link
          href="/tasks"
          className="text-gray-700 hover:text-black"
        >
          Tasks
        </Link>
      </div>
    </nav>
  );
}