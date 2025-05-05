import { Dispatch, SetStateAction } from "react";
import MoodSlider from "./MoodSlider";

type Props = {
  moodScore: number;
  setMoodScore: Dispatch<SetStateAction<number>>;
  moodEmojis: Record<number, string>;
  moodLabels: Record<number, string>;
};

export default function Step1MoodScore({
  moodScore,
  setMoodScore,
  moodLabels,
  moodEmojis,
}: Props) {
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
