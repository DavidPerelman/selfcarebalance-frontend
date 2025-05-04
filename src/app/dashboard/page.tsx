"use client";

import { useAuthCheck } from "@/hooks/useAuthCheck";

export default function Dashboard() {
  const { loading, user } = useAuthCheck();

  if (loading) {
    return <p>טוען את הנתונים שלך...</p>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-4">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        שלום, {user?.username || "משתמש"}!
      </h1>
      <p className="text-gray-700">ברוך הבא לאזור האישי שלך.</p>
    </main>
  );
}
