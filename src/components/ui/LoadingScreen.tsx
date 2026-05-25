import { LoaderCircle, CircleCheckBig, CircleX } from "lucide-react";

interface Props {
  loading: boolean;
  success: boolean;
  error: boolean;
  message: string;
}

export const LoadingScreen = ({ loading, success, error, message }: Props) => {
  if (!loading && !success && !error) return null;

  return (
    <div
      className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            flex
            items-center
            justify-center
            z-50
        "
    >
      <div
        className="
                bg-white
                w-87
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                shadow-2xl
                animate-in
                fade-in
            "
      >
        {loading && (
          <LoaderCircle
            size={70}
            className="
                            text-blue-600
                            animate-spin
                            mb-4
                        "
          />
        )}

        {success && (
          <CircleCheckBig
            size={70}
            className="
                            text-green-600
                            mb-4
                        "
          />
        )}

        {error && (
          <CircleX
            size={70}
            className="
                            text-red-600
                            mb-4
                        "
          />
        )}

        <h2
          className="
                    text-2xl
                    font-bold
                    text-center
                "
        >
          {message}
        </h2>
      </div>
    </div>
  );
};
