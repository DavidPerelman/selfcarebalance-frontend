"use client";

import MoodLogForm from "@/components/MoodLogForm";

export default function LogPage() {
  return (
    <div className="min-h-screen w-full bg-blue-50 flex items-center justify-center px-4 overflow-x-hidden">
      {/* <h1>רישום מצב רוח</h1> */}
      <MoodLogForm />
    </div>
  );
}
