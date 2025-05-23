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
    <div className="text-center space-y-6 px-4">
      <h2 className="text-xl font-semibold">סיכום הרישום שלך</h2>

      <div className="flex flex-col items-center gap-3">
        <span className="text-lg">
          איך דירגת את מצב הרוח שלך? <strong>{moodScore}</strong>
        </span>

        <div className="text-5xl">{moodEmojis[moodScore]}</div>
        <div className="text-base text-gray-600">{moodLabels[moodScore]}</div>
      </div>

      {selectedEmotions.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            רגשות נבחרים
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {selectedEmotions.map((emotion) => (
              <span
                key={emotion}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {emotion}
              </span>
            ))}
          </div>
        </div>
      )}

      {note && (
        <div className="mb-5">
          <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">הערה</h3>
          <p className="text-base text-gray-800 whitespace-pre-wrap bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-200 max-w-md mx-auto">
            {note}
          </p>
        </div>
      )}
    </div>
  );
}
