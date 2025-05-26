"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("access_token");

    if (token) {
      localStorage.setItem("scb_token", token);
      router.push("/app");
    }
  }, [searchParams, router]);

  return <p>אנחנו בודקים את ההתחברות שלך...</p>;
}
