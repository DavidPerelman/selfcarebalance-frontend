"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GoogleCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    console.log("📦 Received token:", token);

    if (!token) {
      router.push("/");
      return;
    }

    localStorage.setItem("access_token", token);
    router.push("/app");
  }, [searchParams, router]);

  return <p>אנחנו בודקים את ההתחברות שלך...</p>;
}
