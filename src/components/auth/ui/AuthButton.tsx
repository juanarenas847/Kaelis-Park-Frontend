interface Props {
    name: string;
    color?: string;
    hover?: string;
    textColor?: string;
    icon?: React.ReactNode;
}

export const AuthButton = ({
    name,
    color,
    hover,
    textColor,
    icon
}: Props) => {

    return (
        <button
            className={`
                w-full
                ${color}
                ${hover}
                ${textColor}
                py-4
                rounded-xl
                font-semibold
                shadow-lg
                transition
                flex
                items-center
                justify-center
                mt-3
            `}
        >
            <span className="mr-2 flex items-center">
                {icon}
            </span>

            <span>
                {name}
            </span>
        </button>
    )
}