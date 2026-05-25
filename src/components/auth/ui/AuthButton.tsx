interface Props {
  name: string;
  color?: string;
  hover?: string;
  textColor?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

export const AuthButton = ({
  name,
  color = "bg-gray-200",
  hover = "hover:bg-gray-300",
  textColor = "text-black",
  icon,
  onClick,
  disabled,
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        ${color}
        ${hover}
        ${textColor}
        
        py-3
        sm:py-3
        
        px-4
        sm:px-3
        
        rounded-lg
        sm:rounded-xl
        
        font-semibold
        text-sm
        sm:text-base
        
        shadow-lg
        transition-all
        duration-200
        
        flex
        items-center
        justify-center
        
        mt-2
        sm:mt-3
        
        disabled:opacity-50
        disabled:cursor-not-allowed
        
        gap-2
      `}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{name}</span>
    </button>
  );
};
