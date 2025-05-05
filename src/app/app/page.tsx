"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/constants/tools";

export default function AppPage() {
  const router = useRouter();
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const toolHandlers: Record<string, () => void> = {
    log: () => router.push("/app/log"),
    journal: () => setSelectedTool("journal"),
    charts: () => setSelectedTool("charts"),
    daily: () => setSelectedTool("daily"),
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
  }, [router]);

  return (
    <main className="p-4 text-right">
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="text-2xl font-bold mb-1">
          שלום דוד, איך אתה מרגיש כרגע?
        </h1>
        <p className="text-gray-600 mb-4">מה תרצה לעשות עכשיו?</p>
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 underline"
        >
          התנתק
        </button>
      </div>

      <section className="flex flex-col items-center gap-4 max-w-md w-full mx-auto">
        {tools.map((tool) => (
          <ToolCard
            key={tool.key}
            onClick={toolHandlers[tool.key]}
            title={tool.title}
            description={tool.description}
            iconName={tool.iconName}
          />
        ))}
      </section>
      {selectedTool === "log" && <div>הטופס של רישום מצב רוח (בהמשך)</div>}
      {selectedTool === "journal" && <div>היומן שלך מוצג כאן</div>}
    </main>
  );
}
