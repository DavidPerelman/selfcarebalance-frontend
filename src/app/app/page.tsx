"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/constants/tools";

export default function AppPage() {
  const router = useRouter();
  // const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");

  const toolHandlers: Record<string, () => void> = {
    log: () => router.push("/app/log"),
    journal: () => router.push("/app/journal"),
    charts: () => router.push("/app/charts"),
    daily: () => router.push("/app/daily"),
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("guest_mode");
    router.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const isGuest = localStorage.getItem("guest_mode") === "true";

    if (!token && !isGuest) {
      router.push("/");
    }

    // לדוגמה בלבד – עדיף לשמור שם המשתמש בנפרד
    if (token) {
      const nameFromToken = localStorage.getItem("username");
      setUserName(nameFromToken || "משתמש");
    } else if (isGuest) {
      setUserName("אורח");
    }
  }, [router]);

  return (
    <div>
      <header className="mb-6 flex flex-col items-center text-center gap-2">
        <h1 className="text-xl font-semibold text-gray-800">שלום {userName}</h1>
        <p className="text-sm text-gray-600">מצב הרוח האחרון שלך: 🙂 שמח</p>

        <button
          onClick={handleLogout}
          className="mt-3 px-4 py-2 text-sm rounded-md bg-gray-300 text-gray-900 hover:bg-gray-400 font-medium transition"
        >
          התנתק
        </button>
      </header>

      <section className="flex flex-col gap-4 w-full">
        {tools.map((tool) => (
          <ToolCard
            key={tool.key}
            onClick={toolHandlers[tool.key]}
            title={tool.title}
            description={tool.description}
            iconName={tool.iconName}
            bgColor={tool.bgColor}
          />
        ))}
      </section>

      <div className="flex justify-center">
        <button
          onClick={() => router.push("/app/profile")}
          className="mt-4 px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-lg shadow hover:bg-gray-50 transition"
        >
          עריכת פרופיל
        </button>
      </div>
    </div>
  );
}
