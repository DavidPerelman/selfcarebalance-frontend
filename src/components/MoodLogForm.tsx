import { useState } from "react";
import Step1MoodScore from "./moodLog/Step1MoodScore";
import Step2SelectEmotions from "./moodLog/Step2SelectEmotions";
import Step3MoodNote from "./moodLog/Step3MoodNote";
import Step4Summary from "./moodLog/Step4Summary";

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
      <div
        className="mb-5 border-solid"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "solid 2px blue",
        }}
      >
        שלב {currentStep + 1}
      </div>
      <div className=" gap-4 flex">
        <button
          disabled={currentStep === 0}
          onClick={goToPreviousStep}
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          חזור
        </button>

        {/* {currentStep < totalSteps - 1 && ( */}
        <button
          disabled={currentStep === 4 - 1}
          onClick={goToNextStep}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          הבא
        </button>
        {/* )} */}
      </div>

      {steps[currentStep]}
    </div>
  );
}
