import { useState } from "react";
import Step1MoodScore from "./moodLog/Step1MoodScore";
import Step2SelectEmotions from "./moodLog/Step2SelectEmotions";
import Step3MoodNote from "./moodLog/Step3MoodNote";

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
  const [selectedEmotions, setSelectedEmotions] = useState([""]);
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
  ];

  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const totalSteps = 3;

  return (
    <div>
      <div>שלב {currentStep + 1}</div>
      {currentStep > 0 && <button onClick={goToPreviousStep}>חזור</button>}
      {currentStep < totalSteps - 1 && (
        <button onClick={goToNextStep}>הבא</button>
      )}

      {steps[currentStep]}
    </div>
  );
}
