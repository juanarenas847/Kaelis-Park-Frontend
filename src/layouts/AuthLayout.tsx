import { LeftPanel } from "../components/auth/paneles/LeftPanel";
import { RightPanel } from "../components/auth/paneles/RightPanel";

interface Props {
    children: React.ReactNode;
}

export const AuthLayout = ({
    children
}: Props) => {

    return (
        <div className="  min-h-screen bg-[#dfe2e7] flex items-center justify-center p-5">

            <div className=" w-full max-w-400 h-[92vh] rounded-[40px] overflow-hidden flex shadow-xl
            ">

                <LeftPanel />

                <RightPanel>
                    {children}
                </RightPanel>

            </div>

        </div>
    )
}