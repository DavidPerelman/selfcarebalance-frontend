"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ToolCard from "@/components/ToolCard";

export default function AppPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const isGuest = localStorage.getItem("guest_mode") === "true";

    if (!token && !isGuest) {
      router.push("/");
    }
  }, [router]);

  return (
    <main className="p-4 text-right">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">שלום דוד פרלמן, מה מצב הרוח כרגע?</h1>
        <button
          onClick={() => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("guest_mode");
            router.push("/");
          }}
          className="text-sm text-red-600 underline"
        >
          התנתק
        </button>
      </div>

      <p className="text-gray-600 mb-6">
        רישום מהיר של מצב רוח, רגשות והמצב הנוכחי
      </p>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow mb-6">
        רישום מצב רוח חדש
      </button>

      <section>
        <ToolCard
          title="אתגור מחשבה"
          description="לבחון את המחשבות הלא-מדויקות ולזהות עיוותי חשיבה"
        />
      </section>
    </main>
  );
}
