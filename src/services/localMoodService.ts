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
