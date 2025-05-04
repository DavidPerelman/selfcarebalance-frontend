"use client";

import dynamic from "next/dynamic";

// טוען את הקומפוננטה רק בצד הלקוח (ללא SSR)
const GoogleCallbackContent = dynamic(
  () => import("@/components/GoogleCallbackContent"),
  { ssr: false }
);

export default function GoogleCallbackPage() {
  return <GoogleCallbackContent />;
}
