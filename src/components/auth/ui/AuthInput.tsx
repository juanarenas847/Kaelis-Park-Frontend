interface Props {
  text: string;
  type: string;
  placeholder?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthInput = ({
  text,
  type,
  placeholder,
  icon,
  value,
  onChange,
}: Props) => {
  return (
    <div className="mb-2">
      <label className="font-semibold block text-sm sm:text-base mb-1">
        {text}
      </label>

      <div className="relative">
        <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 flex items-center">
          {icon}
        </div>

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="
            w-full
            h-10
            sm:h-12
            
            bg-[#d9dde3]
            
            rounded-lg
            sm:rounded-base
            
            pl-12
            sm:pl-15
            pr-4
            
            outline-none
            
            text-sm
            sm:text-base
            
            placeholder:text-gray-400
            
            focus:ring-2
            focus:ring-blue-600/50
            focus:bg-white
            
            transition-all
            duration-200
          "
        />
      </div>
    </div>
  );
};
