// src/components/AppIntroModal.tsx
"use client";

import React from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function AppIntroModal({ children, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg w-11/12 md:w-1/2"
        onClick={(e) => e.stopPropagation()} // עצור את הלחיצה על הרקע מלהסגור את המודל
      >
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
        >
          הבנתי
        </button>
      </div>
    </div>
  );
}
