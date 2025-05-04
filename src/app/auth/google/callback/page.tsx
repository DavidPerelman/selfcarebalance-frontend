"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GoogleCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      console.error("Missing token");
      router.push("/");
      return;
    }

    // שמור את הטוקן ואפנה לאפליקציה
    localStorage.setItem("access_token", token);
    router.push("/app");
  }, [searchParams, router]);

  return <p>מתחברים לחשבון גוגל...</p>;
}
