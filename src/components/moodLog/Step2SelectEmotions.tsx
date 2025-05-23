type Props = {
  positive_emotions: string[];
  negative_motions: string[];
  selectedEmotions: string[];
  setSelectedEmotions: (value: string[]) => void;
};

export default function Step2SelectEmotions({
  positive_emotions,
  negative_motions,
  selectedEmotions,
  setSelectedEmotions,
}: Props) {
  const toggleEmotion = (emotion: string) => {
    if (selectedEmotions.includes(emotion)) {
      setSelectedEmotions(selectedEmotions.filter((e) => e !== emotion));
    } else {
      setSelectedEmotions([...selectedEmotions, emotion]);
    }

    console.log(selectedEmotions);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">
        בחר רגשות שמתארים את התחושה שלך
      </h2>
      <div className="space-y-6">
        <section className="mb-6">
          <h2 className="text-lg font-medium text-green-700 mb-2">
            רגשות חיוביים
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {positive_emotions.map((emotion, i) => (
              <button
                key={i}
                onClick={() => toggleEmotion(emotion)}
                className={`px-3 py-1 m-1 border rounded-md cursor-pointer ${
                  selectedEmotions.includes(emotion)
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {emotion}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium text-red-700 mb-2">
            רגשות שליליים
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {negative_motions.map((emotion, i) => (
              <button
                key={i}
                onClick={() => toggleEmotion(emotion)}
                className={`px-3 py-1 m-1 border rounded-md cursor-pointer ${
                  selectedEmotions.includes(emotion)
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {emotion}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
