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

      <div className="flex flex-col gap-4 w-full items-center max-w-[240px] mt-6">
        <div className="w-full relative">
          <GoogleLoginButton />
          <FaQuestionCircle
            className="absolute -end-6 top-1/2 -translate-y-1/2 text-blue-700 cursor-pointer"
            onClick={() =>
              handleOpenModal(
                "הנתונים נשמרים בענן, ניתנים לגישה מכל מכשיר, ומאובטחים בגיבוי וכניסה מאובטחת עם Google. רק אתה תוכל לראות את הנתונים שלך – אנחנו לא משתמשים בהם ולא משתפים אותם."
              )
            }
          />
        </div>

        <div className="w-full relative">
          <button
            onClick={handleGuestLogin}
            className="flex h-11 w-full items-center justify-center gap-2 rounded bg-indigo-600 px-4 font-medium text-white shadow hover:bg-indigo-700 transition"
          >
            כניסה כאורח
          </button>
          <FaQuestionCircle
            className="absolute -end-6 top-1/2 -translate-y-1/2 text-blue-700 cursor-pointer"
            onClick={() =>
              handleOpenModal(
                "המידע נשמר רק בדפדפן שלך, על המכשיר המקומי. לא נאסף דבר, אין צורך להתחבר – אך שים לב שהנתונים עלולים להימחק אם תנקה את הדפדפן או תעבוד ממכשיר אחר."
              )
            }
          />
        </div>
      </div>

      {isModalOpen && (
        <AppIntroModal onClose={handleCloseModal}>
          <div className="whitespace-pre-wrap text-right leading-relaxed text-sm text-gray-700">
            {modalContent}
          </div>
        </AppIntroModal>
      )}

      <button
        onClick={() =>
          handleOpenModal(`
SelfCareBalance היא אפליקציה אישית לתמיכה רגשית ומודעות עצמית.

🔒 פרטיות:
• במצב מחובר – המידע נשמר בענן, נגיש רק לך.
• במצב אנונימי – המידע נשמר רק בדפדפן שלך.

🚫 שיתוף:
• איננו משתפים, מוכרים או מעבירים את המידע שלך.

🍪 עוגיות:
• רק לצורכי התחברות ושמירת העדפות.

🧠 חשוב לדעת:
האפליקציה אינה מהווה תחליף לייעוץ או טיפול רגשי.

📩 שאלות או פניות:
selfcarebalance.team@gmail.com
`)
        }
        className="mt-8 h-11 w-full max-w-xs flex items-center justify-center px-4 text-sm bg-gray-100 text-gray-800 border border-gray-300 rounded shadow-sm hover:bg-gray-200 transition"
      >
        📄 תקציר מדיניות פרטיות ועקרונות טיפוליים
      </button>
    </main>
  );
}
