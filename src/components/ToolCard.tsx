// @/components/ToolCard.tsx

import * as Icons from "lucide-react";
import { ComponentType } from "react";

type Props = {
  title: string;
  description: string;
  iconName: keyof typeof Icons;
  bgColor: string;
  onClick: () => void;
};

export default function ToolCard({
  title,
  description,
  iconName,
  bgColor,
  onClick,
}: Props) {
  const LucideIcon = Icons[iconName] as ComponentType<{ className?: string }>;

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 p-4 rounded-2xl shadow-md ${bgColor} hover:opacity-90 transition text-right`}
    >
      <LucideIcon className="w-6 h-6 text-gray-600" />
      <div className="flex flex-col items-start text-right">
        <span className="font-semibold text-gray-800">{title}</span>
        <span className="text-sm text-gray-600">{description}</span>
      </div>
    </button>
  );
}
