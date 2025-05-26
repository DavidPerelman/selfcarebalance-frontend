export interface MoodEntry {
  id: string; // UUID
  createdAt: string; // תאריך ISO
  moodScore: number; // מ-1 עד 10
  selectedEmotions: string[]; // רגשות שנבחרו
  note?: string; // הערה חופשית (לא חובה)
}
