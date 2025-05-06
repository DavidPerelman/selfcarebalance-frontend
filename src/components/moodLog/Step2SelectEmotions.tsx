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
      <h2 className="text-center text-lg font-semibold mt-4 mb-2">
        רגשות חיוביים
      </h2>
      <div className="flex flex-wrap gap-2">
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

      <h2 className="text-center text-lg font-semibold mt-6 mb-2">
        רגשות שליליים
      </h2>
      <div className="flex flex-wrap gap-2">
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
    </div>
  );
}
