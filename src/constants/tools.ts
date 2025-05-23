// @/constants/tools.ts

export type Tool = {
  key: string;
  title: string;
  description: string;
  iconName: keyof typeof import("lucide-react");
  bgColor: string;
};

export const tools: Tool[] = [
  {
    key: "log",
    title: "רישום מצב רוח",
    description: "הוספת רישום יומי עם רגשות, גורמים ותחושות",
    iconName: "Smile",
    bgColor: "bg-rose-100",
  },
  {
    key: "journal",
    title: "יומן מצבי רוח",
    description: "הצגה כרונולוגית של כל הרישומים שלך",
    iconName: "Calendar",
    bgColor: "bg-emerald-100",
  },
  {
    key: "charts",
    title: "גרפים ותובנות",
    description: "ניתוח מצבים, רגשות וגורמים לאורך זמן",
    iconName: "BarChart",
    bgColor: "bg-violet-100",
  },
  {
    key: "daily",
    title: "סיכום יומי מונחה",
    description: "תרגול קצר ומודרך של התבוננות עצמית",
    iconName: "PenLine",
    bgColor: "bg-sky-100",
  },
];
