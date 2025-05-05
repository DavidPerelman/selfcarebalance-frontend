import { Dispatch, SetStateAction } from "react";
import MoodSlider from "./MoodSlider";

type Props = {
  moodScore: number;
  setMoodScore: Dispatch<SetStateAction<number>>;
};

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

export default function Step1MoodScore({ moodScore, setMoodScore }: Props) {
  return (
    <div className="text-center mt-10 px-4">
      <h1 className="text-xl font-bold mb-2">בחירת מצב רוח</h1>
      <h2 className="text-md mb-6">איך אתה מרגיש כרגע?</h2>

      <MoodSlider moodScore={moodScore} setMoodScore={setMoodScore} />

      <div className="mt-4 font-medium">{moodLabels[moodScore]}</div>
      <div className="text-6xl mt-4">{moodEmojis[moodScore]}</div>
    </div>
  );
}
