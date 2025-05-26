"use client";

import { useRouter } from "next/navigation";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/constants/tools";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import Image from "next/image";

export default function AppPage() {
  const router = useRouter();
  // const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const { user, loading } = useAuthCheck();

  const toolHandlers: Record<string, () => void> = {
    log: () => router.push("/app/log"),
    journal: () => router.push("/app/journal"),
    charts: () => router.push("/app/charts"),
    daily: () => router.push("/app/daily"),
  };

  const handleLogout = () => {
    localStorage.removeItem("scb_token");
    localStorage.removeItem("guest_mode");
    router.push("/");
  };

  if (loading) {
    return <p className="text-center">טוען נתוני התחברות...</p>;
  }

  if (!user) {
    router.replace("/");
    return null;
  }

  return (
    <div>
      <header className="mb-6 flex flex-col items-center text-center gap-2">
        {user !== "guest" && user.profile_picture && (
          <Image
            src={user.profile_picture}
            alt="תמונת פרופיל"
            className="w-16 h-16 rounded-full shadow"
            width={16}
            height={16}
          />
        )}
        <h1 className="text-xl font-semibold text-gray-800">
          שלום {user === "guest" ? "אורח" : user.username || user.email}
        </h1>
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
