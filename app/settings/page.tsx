"use client";

import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
            PREFERENCES
          </div>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Customize your TaskFlow experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Menu */}
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <button className="w-full rounded-xl bg-blue-50 px-4 py-3 text-left text-sm font-semibold text-blue-600">
              ⚙️ General
            </button>

            <button className="mt-2 w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-50">
              🔔 Notifications
            </button>

            <button className="mt-2 w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-50">
              🎨 Appearance
            </button>

            <button className="mt-2 w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-50">
              👤 Account
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6 lg:col-span-2">

            {/* Preferences */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                General Settings
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage your basic preferences.
              </p>

              <div className="mt-7 space-y-4">

                {/* Notifications */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-5">

                  <div>
                    <p className="font-semibold text-slate-800">
                      Notifications
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Receive task reminders and updates.
                    </p>
                  </div>

                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`relative h-7 w-12 rounded-full transition ${
                      notifications
                        ? "bg-blue-600"
                        : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                        notifications
                          ? "left-6"
                          : "left-1"
                      }`}
                    />
                  </button>

                </div>

                {/* Dark Mode */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-5">

                  <div>
                    <p className="font-semibold text-slate-800">
                      Dark Mode
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Change your appearance preference.
                    </p>
                  </div>

                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative h-7 w-12 rounded-full transition ${
                      darkMode
                        ? "bg-blue-600"
                        : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                        darkMode
                          ? "left-6"
                          : "left-1"
                      }`}
                    />
                  </button>

                </div>

              </div>
            </div>

            {/* Workspace */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                Workspace
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your current TaskFlow workspace.
              </p>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 p-5">
                <div>
                  <p className="text-sm text-slate-500">
                    Workspace Name
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    TaskFlow Workspace
                  </p>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  Active
                </span>
              </div>

            </div>

            {/* Danger */}
            <div className="rounded-3xl border border-red-100 bg-white p-7 shadow-sm">

              <h2 className="text-xl font-bold text-red-600">
                Danger Zone
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Actions in this section should be used carefully.
              </p>

              <button className="mt-5 rounded-xl border border-red-200 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                Reset Preferences
              </button>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}