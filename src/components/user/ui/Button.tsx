import type { LucideIcon } from "lucide-react";

interface Props {
  name: string;
  icon?: LucideIcon;
  color?:string;
  textColor?:string;
}

export const Button = ({ name, icon: Icon, color ="bg-blue-600", textColor ="text-white" }: Props) => {
  return (
    <button className={`relative ${color} font-semibold border border-black/20 transition-colors duration-200 p-2 rounded-lg ${textColor} w-full flex items-center justify-center gap-1 text-xs`}>
      <span>{name}</span>

      {Icon  &&  <Icon className="absolute right-2" size={16} />}
    </button>
  );
};
