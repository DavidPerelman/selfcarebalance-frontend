// useAuthCheck.ts
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuthCheck() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const user = await res.json();
          // נניח שמי שמחובר מועבר לדשבורד
          router.push("/dashboard");
        }
      } catch (error) {
        console.log("Not authenticated");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  return { loading };
}
