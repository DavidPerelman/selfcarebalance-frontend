"use client";

import CallbackContent from "@/components/CallbackContent";
import { Suspense } from "react";

export default function CallbackPage() {
  return (
    <Suspense fallback={<p>אנחנו בודקים את ההתחברות שלך...</p>}>
      <CallbackContent />
    </Suspense>
  );
}
