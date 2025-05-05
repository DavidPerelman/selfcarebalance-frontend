import { ReactNode } from "react";

type ToolCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function ToolCard({ title, description, icon }: ToolCardProps) {
  return (
    <div className="bg-white shadow rounded-xl p-4 text-right">
      {icon && <div className="mb-2">{icon}</div>}
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
