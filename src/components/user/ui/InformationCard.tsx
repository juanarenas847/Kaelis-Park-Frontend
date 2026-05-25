import type { LucideIcon } from "lucide-react";

interface Props {
    color: string;
    text:string;
    number: number | string ;
    icon: LucideIcon;
}

const badgeStyles: Record<string, { bg: string; icon: string }> = {
  green: { bg: "bg-green-100", icon: "text-green-600" },
  purple: { bg: "bg-purple-100", icon: "text-purple-600" },
  yellow: { bg: "bg-yellow-100", icon: "text-yellow-600" },
};

export const InformationCard = ( {color, text , number, icon:Icon}: Props) => {
  const styles = badgeStyles[color] || badgeStyles.green;

  return (
    <>
      {/* TOP CARDS */}
      <div className="bg-white border border-black/20 rounded-xl p-5 flex items-center gap-4 w-full">
        <div className={`w-13 h-13 rounded-full ${styles.bg} flex items-center justify-center shrink-0`}>
          <Icon className={`w-7 h-7 ${styles.icon}`} />
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl font-bold leading-none">{number}</h2>

          <p className="text-xs text-zinc-500 capitalize">{text}</p>
        </div>
      </div>
    </>
  );
}
