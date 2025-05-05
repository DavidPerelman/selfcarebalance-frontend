import * as Icons from "lucide-react";

type ToolCardProps = {
  title: string;
  description: string;
  iconName: keyof typeof Icons;
  onClick?: () => void;
};

export default function ToolCard({
  title,
  description,
  iconName,
  onClick,
}: ToolCardProps) {
  const IconComponent = Icons[iconName] as React.ElementType;

  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-white shadow hover:bg-gray-50 transition cursor-pointer"
    >
      {IconComponent && <IconComponent className="w-6 h-6 text-indigo-600" />}
      <h3 className="text-base font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
