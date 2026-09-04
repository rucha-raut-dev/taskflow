"use client";

import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            Preferences
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Customize your TaskFlow experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Sidebar */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <button className="w-full rounded-xl bg-blue-50 px-4 py-3 text-left text-sm font-semibold text-blue-600">
              General
            </button>

            <button className="mt-2 w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50">
              Notifications
            </button>

            <button className="mt-2 w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50">
              Appearance
            </button>

            <button className="mt-2 w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50">
              Account
            </button>
          </div>

          {/* Settings Content */}
          <div className="space-y-6 lg:col-span-2">

            {/* General */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                General Settings
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage your basic application preferences.
              </p>

              <div className="mt-6 space-y-5">

                {/* Notifications */}
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
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
                      notifications ? "bg-blue-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                        notifications ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Dark Mode */}
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Dark Mode
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Switch between light and dark appearance.
                    </p>
                  </div>

                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative h-7 w-12 rounded-full transition ${
                      darkMode ? "bg-blue-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                        darkMode ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>

              </div>
            </div>

            {/* Workspace */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Workspace
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage your TaskFlow workspace.
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">
                  Workspace Name
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  TaskFlow Workspace
                </p>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-red-600">
                Danger Zone
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                These actions can affect your workspace.
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