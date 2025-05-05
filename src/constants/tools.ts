export type Tool = {
  key: string;
  title: string;
  description: string;
  iconName: keyof typeof import("lucide-react");
};

export const tools: Tool[] = [
  {
    key: "log",
    title: "רישום מצב רוח",
    description: "הוספת רישום יומי עם רגשות, גורמים ותחושות",
    iconName: "Smile",
  },
  {
    key: "journal",
    title: "יומן מצבי רוח",
    description: "הצגה כרונולוגית של כל הרישומים שלך",
    iconName: "Calendar",
  },
  {
    key: "charts",
    title: "גרפים ותובנות",
    description: "ניתוח מצבים, רגשות וגורמים לאורך זמן",
    iconName: "BarChart",
  },
  {
    key: "daily",
    title: "סיכום יומי מונחה",
    description: "תרגול קצר ומודרך של התבוננות עצמית",
    iconName: "PenLine",
  },
];
