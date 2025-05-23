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
    <div className="max-w-md mx-auto text-center min-h-[500px] flex flex-col justify-center px-4">
      <h1 className="text-xl font-bold mb-2">בחירת מצב רוח</h1>
      <h2 className="text-xl mb-6 break-words whitespace-normal mb-15">
        איך אתה מרגיש כרגע?
      </h2>

      <div className="flex justify-center p-4 sm:p-6 md:p-8 bg-[#664aff] rounded-md">
        <MoodSlider moodScore={moodScore} setMoodScore={setMoodScore} />
      </div>

      <div className="mt-6 font-medium text-xl">{moodLabels[moodScore]}</div>
      <div className="text-6xl mt-2">{moodEmojis[moodScore]}</div>
    </div>
  );
}
