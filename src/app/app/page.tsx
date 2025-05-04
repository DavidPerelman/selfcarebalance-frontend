"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AppPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => {
          localStorage.removeItem("access_token");
          router.push("/");
        }}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
      >
        התנתק
      </button>

      <h1 className="text-3xl font-bold">ברוך הבא!</h1>
      <p className="mt-4 text-gray-600">התחברת בהצלחה.</p>
    </div>
  );
}
