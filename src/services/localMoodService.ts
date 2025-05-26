import { MoodEntry } from "@/types/MoodEntry";

const STORAGE_KEY = "guest_mood_entries";

export function saveMoodEntry(entry: MoodEntry) {
  // שלב 1: שליפה מה־localStorage
  const existingEntriesJSON = localStorage.getItem(STORAGE_KEY);
  const existingEntries: MoodEntry[] = existingEntriesJSON
    ? JSON.parse(existingEntriesJSON)
    : [];

  // שלב 2: הוספת הרשומה החדשה למערך
  existingEntries.push(entry);

  // שלב 3: שמירה חזרה ל־localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingEntries));
}

export async function sendMoodEntryToServer({
  mood_score,
  emotions,
  note,
}: {
  mood_score: number;
  emotions: string[];
  note?: string;
}): Promise<Response> {
  const client_id = crypto.randomUUID();

  const token = localStorage.getItem("scb_token");

  return await fetch("http://localhost:8000/mood/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      client_id,
      mood_score: mood_score,
      emotions: emotions,
      note,
    }),
  });
}
