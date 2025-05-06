type Props = {
  moodScore: number;
  selectedEmotions: string[];
  note: string;
  moodEmojis: Record<number, string>;
  moodLabels: Record<number, string>;
};

export default function Step4Summary({
  moodScore,
  selectedEmotions,
  note,
  moodEmojis,
  moodLabels,
}: Props) {
  return (
    <div className="text-center mt-10 px-4">
      <h1 className="text-center text-2xl font-bold mb-4">
        סיכום מצב הרוח שלך
      </h1>

      <h2 className="text-center text-lg font-semibold mt-6">הדירוג שלך:</h2>
      <div className="text-6xl mt-2">{moodEmojis[moodScore]}</div>
      <div className="text-xl font-medium mt-1">{moodLabels[moodScore]}</div>

      <h2 className="text-center text-lg font-semibold mt-6">רגשות שנבחרו:</h2>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {selectedEmotions.map((emotion, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium"
          >
            {emotion}
          </span>
        ))}
      </div>

      {note && (
        <>
          <h2 className="text-center text-lg font-semibold mt-6">הערה:</h2>
          <p className="bg-gray-100 p-3 rounded-md mt-2 max-w-xl mx-auto text-right">
            {note}
          </p>
        </>
      )}
    </div>
  );
}
