type Props = {
  moodScore: number;
  selectedEmotions: string[];
  note: string;
  moodEmojis: Record<number, string>;
};

export default function Step4Summary({
  moodScore,
  selectedEmotions,
  note,
  moodEmojis,
}: Props) {
  return (
    <div>
      <h1>מצב הרוח שלך</h1>
      <div className="mt-4 font-medium">{moodScore}</div>
      <div className="text-6xl mt-4">{moodEmojis[moodScore]}</div>
    </div>
  );
}
