import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  showBackButton?: boolean;
}

export const RightPanel = ({ children, showBackButton = true }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        relative
        w-full
        lg:w-1/2

        min-h-screen

        bg-[#f8f8f8]

        flex
        items-center
        justify-center

        overflow-hidden

        px-4
        sm:px-6
        lg:px-8
      "
    >
      {showBackButton && (
        <button
          onClick={() => navigate("/")}
          className="
            absolute
            top-4
            left-4
            z-20

            w-10
            h-10

            rounded-xl
            bg-white
            border
            border-gray-200
            shadow-sm

            flex
            items-center
            justify-center

            text-gray-700
            hover:bg-gray-100
            transition
          "
        >
          <ArrowLeft size={20} />
        </button>
      )}

      <div
        className="
          w-full
          max-w-105

          flex
          flex-col
          justify-center

          mx-auto
        "
      >
        {children}
      </div>
    </div>
  );
};
