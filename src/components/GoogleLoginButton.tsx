"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";

const getGoogleLoginUrl = () => {
  return process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL!;
};

export default function GoogleLoginButton() {
  return (
    <a
      href={getGoogleLoginUrl()}
      className="flex h-11 w-full max-w-xs items-center justify-center gap-2 rounded bg-white px-4 font-medium text-gray-800 shadow border border-gray-300 hover:bg-gray-100 transition"
      // className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium h-11 px-4 rounded shadow w-full max-w-xs"
      dir="rtl"
    >
      <FcGoogle size={20} />
      התחבר עם Google
    </a>
  );
}
