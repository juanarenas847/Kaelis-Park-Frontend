// components/ui/SpaceVehicle.tsx

import {  CarFront, Clock3, Motorbike } from "lucide-react";

interface Props {
  space: {
    id: string;
    status: string;
    type: string;
  };

  selected: boolean;

  onClick: () => void;
}

export const SpaceVehicle = ({ space, selected, onClick }: Props) => {
  const isOccupied = space.status === "occupied";

  const isReserved = space.status === "reserved";

  const isAvailable = space.status === "disponible";

  return (
    <button
      disabled={isOccupied || isReserved}
      onClick={() => {
        if (!isOccupied && !isReserved) {
          onClick();
        }
      }}
      className={`
        relative
        w-10
        h-16
        rounded-xl
        border
        flex
        flex-col
        items-center
        justify-center
        shrink-0
        overflow-hidden

        transition-all
        duration-300
        ease-out

        active:scale-95

        ${
          isOccupied
            ? `
              bg-red-50
              border-red-300
              cursor-not-allowed

              hover:border-red-500
              hover:bg-red-100
              hover:shadow-lg
              hover:shadow-red-200/40
            `
            : isReserved
              ? `
                bg-yellow-50
                border-yellow-300
                cursor-not-allowed

                hover:border-yellow-500
                hover:bg-yellow-100
                hover:shadow-lg
                hover:shadow-yellow-200/40
              `
              : selected
                ? `
                  bg-blue-600
                  border-blue-600
                  text-white

                  scale-105
                  shadow-xl
                  shadow-blue-300/50

                  ring-4
                  ring-blue-200
                `
                : `
                  bg-white
                  border-zinc-300

                  hover:bg-green-50
                  hover:border-green-400
                  hover:shadow-xl
                  hover:shadow-green-200/40
                  hover:-translate-y-1
                  hover:scale-105
                `
        }
      `}
    >
      {/* GLOW */}
      {selected && (
        <div
          className="
            absolute inset-0
            bg-white/10
            animate-pulse
          "
        />
      )}

      {/* TOP STATUS */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2">
        {/* AVAILABLE */}
        {isAvailable && !selected && (
          <div
            className="
              w-2
              h-2
              rounded-full
              bg-green-500
              animate-pulse
            "
          />
        )}

        {/* OCCUPIED */}
        {isOccupied &&
          (space.type === "moto" ? (
            <Motorbike size={14} className="text-red-500" />
          ) : (
            <CarFront size={14} className="text-red-500" />
          ))}

        {/* RESERVED */}
        {isReserved && <Clock3 size={14} className="text-yellow-500" />}

        {/* SELECTED */}
        {selected &&
          (space.type === "moto" ? (
            <Motorbike size={14} className="text-white" />
          ) : (
            <CarFront size={14} className="text-white" />
          ))}
      </div>

      {/* ID */}
      <span
        className={`
          text-[9px]
          font-semibold
          mt-3
          transition-all
          duration-300

          ${selected ? "text-white" : "text-zinc-700"}
        `}
      >
        {space.id}
      </span>

      {/* BOTTOM LINE */}
      <div
        className={`
          absolute
          bottom-0
          left-0
          h-1
          rounded-full
          transition-all
          duration-300

          ${
            isOccupied
              ? "bg-red-500 w-full"
              : isReserved
                ? "bg-yellow-500 w-full"
                : selected
                  ? "bg-white w-full"
                  : "bg-green-500 w-0 hover:w-full"
          }
        `}
      />
    </button>
  );
};
