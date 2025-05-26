"use client";

import { useState } from "react";
import Step1MoodScore from "./moodLog/Step1MoodScore";
import Step2SelectEmotions from "./moodLog/Step2SelectEmotions";
import Step3MoodNote from "./moodLog/Step3MoodNote";
import Step4Summary from "./moodLog/Step4Summary";
import { useRouter } from "next/navigation";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import {
  saveMoodEntry,
  sendMoodEntryToServer,
} from "@/services/localMoodService";

const positive_emotions = [
  "אמון",
  "אמפתיה",
  "אומץ",
  "אדיבות",
  "חשיבות עצמית",
  "שמחה",
  "שלווה",
  "אהבה",
  "התרגשות",
  "סקרנות",
  "תקווה",
  "הכרת תודה",
  "גאווה",
  "רוגע",
  "סיפוק",
  "אופטימיות",
  "השראה",
  "הנאה",
  "חמלה",
  "ביטחון",
];

const negative_motions = [
  "עצב",
  "כעס",
  "פחד",
  "בדידות",
  "לחץ",
  "חרדה",
  "אכזבה",
  "קנאה",
  "בושה",
  "ייאוש",
  "עייפות",
  "בלבול",
  "חוסר ערך",
  "גועל",
  "אשמה",
  "מבוכה",
  "החמצה",
  "דאגה",
  "שנאה",
  "תסכול",
  "חוסר אונים",
];

const moodEmojis: Record<number, string> = {
  1: "😖",
  2: "😢",
  3: "☹️",
  4: "😕",
  5: "😐",
  6: "🙂",
  7: "😊",
  8: "😄",
  9: "😁",
  10: "🤩",
};

const moodLabels: Record<number, string> = {
  1: "רע מאוד",
  2: "רע",
  3: "די רע",
  4: "ככה ככה",
  5: "בסדר",
  6: "סביר",
  7: "טוב",
  8: "טוב מאוד",
  9: "מעולה",
  10: "מצוין!",
};

export default function MoodLogForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [moodScore, setMoodScore] = useState(5);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const { user } = useAuthCheck();

  console.log(user);

  const router = useRouter();

  const saveMood = async () => {
    if (selectedEmotions.length === 0) {
      alert("יש לבחור לפחות רגש אחד כדי להמשיך");
      return;
    }

    const moodEntry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      moodScore,
      selectedEmotions,
      note,
    };

    if (user === "guest") {
      // שמירה מקומית
      saveMoodEntry(moodEntry); // שמירה בפועל ב־localStorage
    } else {
      // שליחה לשרת
      try {
        await sendMoodEntryToServer({
          mood_score: moodScore,
          emotions: selectedEmotions,
          note,
        });
        console.log("✔️ נשלח לשרת בהצלחה");
      } catch (error) {
        console.error("שליחה לשרת נכשלה:", error);
        alert("אירעה שגיאה בשליחה לשרת");
      }
    }

    router.push("/app");
  };

  const backToHome = () => {
    router.push("/app");
  };

  const steps = [
    <Step1MoodScore
      key={0}
      moodScore={moodScore}
      setMoodScore={setMoodScore}
      moodEmojis={moodEmojis}
      moodLabels={moodLabels}
    />,
    <Step2SelectEmotions
      key={1}
      selectedEmotions={selectedEmotions}
      setSelectedEmotions={setSelectedEmotions}
      positive_emotions={positive_emotions}
      negative_motions={negative_motions}
    />,
    <Step3MoodNote key={2} note={note} setNote={setNote} />,
    <Step4Summary
      key={3}
      moodScore={moodScore}
      selectedEmotions={selectedEmotions}
      note={note}
      moodEmojis={moodEmojis}
      moodLabels={moodLabels}
    />,
  ];

  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="max-w-md mx-auto place-items-center">
      {steps[currentStep]}
      <div className="gap-4 flex mt-7">
        <button
          onClick={currentStep === 0 ? backToHome : goToPreviousStep}
          className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-5 py-2 text-xl font-medium rounded-xl shadow transition"
        >
          חזור
        </button>

        <button
          onClick={currentStep === 4 - 1 ? saveMood : goToNextStep}
          className="bg-blue-600 text-white hover:bg-blue-800 px-5 py-2 text-xl font-medium rounded-xl shadow transition"
        >
          {currentStep === 4 - 1 ? "שמור" : "הבא"}
        </button>
      </div>
    </div>
  );
}
