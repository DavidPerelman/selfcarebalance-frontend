import GoogleCallbackContent from "@/components/GoogleCallbackContent";
import { Suspense } from "react";

export default function GoogleCallbackPage() {
  return (
    <Suspense fallback={<p>מתחברים לחשבון גוגל...</p>}>
      <GoogleCallbackContent />
    </Suspense>
  );
}
