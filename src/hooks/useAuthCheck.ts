// src/hooks/useAuthCheck.ts
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  email: string;
  username?: string;
  picture?: string;
};

export function useAuthCheck() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | "guest" | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const isGuest = localStorage.getItem("guest_mode") === "true";
      if (isGuest) {
        setUser("guest");
        setLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          router.replace("/");
          return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          router.replace("/");
          return;
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        router.replace("/");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  return { loading, user };
}
