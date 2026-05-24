

interface Props {
    text: string;
    type: string;
    placeholder?: string;
    icon?: React.ReactNode
}


export const AuthInput = ({ text, type, placeholder, icon }: Props) => {
    return (
        <div className="mb-1">

            <label className="font-semibold block ">
                {text}
            </label>

            <div className="relative">

                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {icon}
                </div>

                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full h-16 bg-[#d9dde3] rounded-2xl pl-15 pr-4 outline-none
                    "
                />
            </div>
        </div>
    )
}
