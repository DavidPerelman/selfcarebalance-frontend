"use client";

import { Suspense } from "react";
import GoogleCallbackContent from "@/components/GoogleCallbackContent";

export default function GoogleCallbackPage() {
  <Suspense fallback={<p>מתחברים לחשבון גוגל...</p>}>
    <GoogleCallbackContent />
  </Suspense>;
}
