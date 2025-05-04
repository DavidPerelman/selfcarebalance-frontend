"use client";

import GoogleLoginButton from "@/components/GoogleLoginButton";
import { useAuthCheck } from "@/hooks/useAuthCheck";

export default function Home() {
  const { loading } = useAuthCheck();

  if (loading) {
    return <p>בודק התחברות...</p>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <h1 className="text-4xl font-bold text-indigo-700 mb-2">
        SelfCareBalance
      </h1>
      <p className="text-lg text-gray-700 mb-6">מצא את האיזון שבך</p>
      <GoogleLoginButton />
    </main>
  );
}
