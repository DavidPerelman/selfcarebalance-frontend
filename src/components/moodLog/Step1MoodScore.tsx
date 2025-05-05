import { useState } from "react";

type Props = {
  moodScore: number;
  setMoodScore: (value: number) => void;
};

export default function Step1MoodScore({ moodScore, setMoodScore }: Props) {
  return <div>בחירת מצב רוח</div>;
}
