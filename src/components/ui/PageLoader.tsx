import { LoaderCircle } from "lucide-react";

export const PageLoader = () => {
  return (
    <div
      className="
            fixed
            inset-0
            bg-white
            flex
            items-center
            justify-center
            z-999
        "
    >
      <LoaderCircle
        size={60}
        className="
                    animate-spin
                    text-blue-600
                "
      />
    </div>
  );
};
