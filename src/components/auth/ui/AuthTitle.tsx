interface Props {
    title: string;
    desc?: string;
}

export const AuthTitle = ({ title, desc }: Props) => {
    return (
        <>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1351E4] text-center mb-1">
                {title}
            </h2>
            {desc && (
                <p className="text-gray-500  sm:mb-2 text-center text-sm sm:text-base leading-relaxed">
                    {desc}
                </p>
            )}
        </>
    )
}
