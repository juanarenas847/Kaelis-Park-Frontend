interface Props {
    children: React.ReactNode;
}

export const RightPanel = ({
    children
}: Props) => {

    return (
        <div className="  w-1/2 flex justify-center items-center bg-[#f8f8f8] p-5
        ">
            <div className=" relative w-full max-w-125">

                {children}

            </div>
        </div>
    )
}