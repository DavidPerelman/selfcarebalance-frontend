export type Mood = {
  id: string;
  mood_score: number;
  reasons: string;
  note: string;
  emotions: string[];
  created_at: string; // ISO string
};

export function saveMoodLocally(newMood: Mood) {
  const existing = localStorage.getItem("guest_moods");
  const moods: Mood[] = existing ? JSON.parse(existing) : [];
  moods.push(newMood);
  localStorage.setItem("guest_moods", JSON.stringify(moods));
}

export function getGuestMoods(): Mood[] {
  const data = localStorage.getItem("guest_moods");
  return data ? JSON.parse(data) : [];
}

export function deleteGuestMood(id: string): void {
  const data = localStorage.getItem("guest_moods");
  if (!data) {
    return;
  }

  const moods: Mood[] = JSON.parse(data);
  const updated = moods.filter((mood) => mood.id !== id);

  localStorage.setItem("guest_moods", JSON.stringify(updated));
}

export function updateGuestMood(id: string, updatedMood: Mood): void {
  const data = localStorage.getItem("guest_moods");
  if (!data) return;

  const moods: Mood[] = JSON.parse(data);
  const index = moods.findIndex((m) => m.id === id);
  if (index === -1) return;

  moods[index] = updatedMood;
  localStorage.setItem("guest_moods", JSON.stringify(moods));
}

export function clearAllGuestMoods(): void {
  localStorage.removeItem("guest_moods");
}

export function importGuestMoods(newMoods: Mood[]): void {
  if (!Array.isArray(newMoods)) return;

  const existingData = localStorage.getItem("guest_moods");
  const existingMoods: Mood[] = existingData ? JSON.parse(existingData) : [];

  const existingIds = new Set(existingMoods.map((m) => m.id));
  const validMoods: Mood[] = [];

  for (const mood of newMoods) {
    if (
      typeof mood.id === "string" &&
      typeof mood.mood_score === "number" &&
      typeof mood.reasons === "string" &&
      typeof mood.note === "string" &&
      Array.isArray(mood.emotions) &&
      typeof mood.created_at === "string"
    ) {
      if (!existingIds.has(mood.id)) {
        validMoods.push(mood);
      }
    }
  }

  const merged = [...existingMoods, ...validMoods];
  localStorage.setItem("guest_moods", JSON.stringify(merged));
}

export async function downloadGuestMoodsAsJson(): Promise<void> {
  const data = await getGuestMoods();

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "guest_moods.json";
  link.click();

  URL.revokeObjectURL(link.href);
}

export async function importGuestMoodsFromFile(file: File): Promise<void> {
  if (!file) return;

  const fileText = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsText(file);
  });

  try {
    const newMoods = JSON.parse(fileText);
    importGuestMoods(newMoods);
  } catch (err) {
    console.error("Invalid JSON file", err);
  }
}
