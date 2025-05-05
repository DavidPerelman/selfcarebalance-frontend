"use client";

import MoodLogForm from "@/components/MoodLogForm";
import { useState } from "react";

export default function LogPage() {
  //   const [moodScore, setMoodScore] = useState<number | null>(null);

  //   const emojiMap = ["😖", "😣", "😕", "😐", "🙂", "😊", "😌", "😁", "😃", "😄"];

  //   const moodScale = [
  //     { value: 1, emoji: "😖" },
  //     { value: 2, emoji: "😣" },
  //     { value: 3, emoji: "😕" },
  //     { value: 4, emoji: "😐" },
  //     { value: 5, emoji: "🙂" },
  //     { value: 6, emoji: "😊" },
  //     { value: 7, emoji: "😌" },
  //     { value: 8, emoji: "😁" },
  //     { value: 9, emoji: "😃" },
  //     { value: 10, emoji: "😄" },
  //   ];

  return (
    <div>
      <h1>רישום מצב רוח</h1>
      <MoodLogForm />
    </div>
  );
}
