
interface Props {
    title: string;
    desc?: string;
}


export const AuthTitle = ({ title, desc }: Props) => {
    return (
        <>
            <h2 className="text-3xl font-bold text-[#1351E4] text-center">
                {title}
            </h2>
            <p className="text-gray-500 mb-2 text-center">
                {desc}
            </p>
        </>

    )
}
