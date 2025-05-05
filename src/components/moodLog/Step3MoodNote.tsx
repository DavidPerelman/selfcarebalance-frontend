type Props = {
  note: string;
  setNote: (value: string) => void;
};

export default function Step3MoodNote({ note, setNote }: Props) {
  return (
    <div>
      <h1>הוספת הערה</h1>
      <p>אם תרצה, תוכל לכתוב מחשבות, תחושות או מה שעבר עליך כרגע.</p>
      <textarea
        className="w-100 p-2 border border-gray-300 rounded-lg mt-4"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={5}
      ></textarea>
    </div>
  );
}
