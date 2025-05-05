// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import AppIntroModal from "@/components/AppIntroModal";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import { FaQuestionCircle } from "react-icons/fa"; // אייקון סימן שאלה
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");
  const { loading, user } = useAuthCheck();
  const router = useRouter();

  const handleOpenModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGuestLogin = () => {
    // קוד למצב אורח (ללא התחברות)
    localStorage.setItem("guest_mode", "true");
    window.location.href = "/app";
  };

  useEffect(() => {
    if (!loading && user) {
      router.replace("/app");
    }
  }, [loading, user, router]);

  if (loading) {
    return <p>בודק התחברות...</p>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 text-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-2">
        SelfCareBalance
      </h1>

      <p className="text-lg text-gray-700 mb-6 max-w-md">
        אפליקציה אישית למעקב אחר מצב רוח ורגשות, בהתבסס על עקרונות טיפול
        קוגניטיבי-התנהגותי (CBT). בעזרתה תוכל לזהות דפוסים רגשיים, להבין את עצמך
        טוב יותר ולטפל בעצמך.{" "}
      </p>

      <div className="flex items-center gap-2">
        <GoogleLoginButton />
        <FaQuestionCircle
          className="text-blue-700 cursor-pointer"
          onClick={() =>
            handleOpenModal(
              "הנתונים נשמרים בענן, ניתנים לגישה מכל מכשיר, ומאובטחים בגיבוי וכניסה מאובטחת עם Google. רק אתה תוכל לראות את הנתונים שלך – אנחנו לא משתמשים בהם ולא משתפים אותם."
            )
          }
        />
      </div>

      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={handleGuestLogin}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded shadow text-right w-full md:w-auto"
        >
          כניסה כאורח
        </button>
        <FaQuestionCircle
          className="text-blue-700 cursor-pointer"
          onClick={() =>
            handleOpenModal(
              "המידע נשמר רק בדפדפן שלך, על המכשיר המקומי. לא נאסף דבר, אין צורך להתחבר – אך שים לב שהנתונים עלולים להימחק אם תנקה את הדפדפן או תעבוד ממכשיר אחר."
            )
          }
        />
      </div>

      {isModalOpen && (
        <AppIntroModal onClose={handleCloseModal}>
          <p>{modalContent}</p>
        </AppIntroModal>
      )}
    </main>
  );
}
