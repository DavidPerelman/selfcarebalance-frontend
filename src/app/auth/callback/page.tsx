import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("access_token");

    console.log(token);

    if (token) {
      localStorage.setItem("access_token", token);
      router.push("/dashboard");
    }
  }, [searchParams, router]);

  return <p>אנחנו בודקים את ההתחברות שלך...</p>;
}
