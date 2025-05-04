"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "@/components/GoogleLoginButton";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      router.push("/app");
    }
  }, [router]);

  const handleGuestLogin = () => {
    // כאן בהמשך נוכל להוסיף ל־localStorage סימון של מצב אורח
    router.push("/app");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 text-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-2">
        SelfCareBalance
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-md">
        אפליקציה למעקב אחר מצב רוח וטיפול עצמי בגישה מבוססת CBT. תוכל להשתמש
        כאורח או להתחבר עם חשבון Google כדי לשמור את הנתונים בענן.
      </p>

      <GoogleLoginButton />

      <button
        onClick={handleGuestLogin}
        className="mt-4 text-blue-700 underline"
      >
        כניסה כאורח
      </button>

      <p className="text-xs text-gray-500 mt-6 max-w-xs">
        כאורח, הנתונים יישמרו רק אצלך בדפדפן. בהתחברות, הנתונים נשמרים בענן
        (MongoDB).
      </p>
    </main>
  );
}
