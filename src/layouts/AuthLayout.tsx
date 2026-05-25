import { LeftPanel } from "../components/auth/paneles/LeftPanel";
import { RightPanel } from "../components/auth/paneles/RightPanel";

interface Props {
  children: React.ReactNode;
  showBackButton?: boolean;
}

export const AuthLayout = ({ children, showBackButton = true }: Props) => {
  return (
    <div
      className="
        min-h-screen
        bg-[#dfe2e7]

        p-3
        sm:p-5
        flex
        flex-col
        lg:justify-center
        lg:items-center
      "
    >
      <div
        className="
          w-full
          lg:max-w-425

          bg-white

          rounded-[40px]

          shadow-xl

          overflow-hidden

          flex
          flex-col
          lg:flex-row

          lg:h-[95vh]
        "
      >
        <LeftPanel />

        <RightPanel showBackButton={showBackButton}>{children}</RightPanel>
      </div>
    </div>
  );
};
