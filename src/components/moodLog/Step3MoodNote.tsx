type Props = {
  note: string;
  setNote: (value: string) => void;
};

export default function Step3MoodNote({ note, setNote }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 text-center px-1 mb-5">
      <h1 className="text-xl font-semibold">תרצה להוסיף כמה מילים?</h1>
      <p className="text-xl text-gray-600">
        אפשר לכתוב מה שעובר עליך – או פשוט לדלג
      </p>

      <textarea
        className="w-full max-w-xl h-40 p-4 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="הרגשתי שמשהו בתוכי השתנה... או שאולי זה היה רק היום הארוך"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}
