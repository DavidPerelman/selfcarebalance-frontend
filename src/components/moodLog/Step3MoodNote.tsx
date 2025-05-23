type Props = {
  note: string;
  setNote: (value: string) => void;
};

export default function Step3MoodNote({ note, setNote }: Props) {
  return (
    // <div>
    //   <h1 className="text-center">הוספת הערה</h1>
    //   <p>אם תרצה, תוכל לכתוב מחשבות, תחושות או מה שעבר עליך כרגע.</p>
    //   <textarea
    //     className="w-100 p-2 border border-gray-300 rounded-lg mt-4"
    //     value={note}
    //     onChange={(e) => setNote(e.target.value)}
    //     rows={5}
    //   ></textarea>
    // </div>
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
