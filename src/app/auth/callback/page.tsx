import CallbackContent from "@/components/CallbackContent";
import { Suspense } from "react";

export default function CallbackPage() {
  return (
    <Suspense fallback={<p>מתחברים לחשבון גוגל...</p>}>
      <CallbackContent />
    </Suspense>
  );
}
