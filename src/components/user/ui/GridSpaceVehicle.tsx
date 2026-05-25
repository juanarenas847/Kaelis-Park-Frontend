// components/ui/GridSpaceVehicle.tsx

import { ArrowLeft, ArrowRight } from "lucide-react";

import { leftSpaces, rightSpaces, topSpaces } from "./spaces";
import { SpaceVehicle } from "./SpaceVehicle";

interface Props {
  selectedSpace: any;
  onSelectSpace: (space: any) => void;
}

export const GridSpaceVehicle = ({
  selectedSpace,
  onSelectSpace,
}: Props) => {
  return (
    <div className="bg-zinc-200/70 rounded-2xl border border-zinc-300 p-2 h-full flex flex-col justify-center overflow-hidden">
      {/* TOP */}
      <div className="flex gap-1 mb-1 justify-center">
        {topSpaces.map((space) => (
          <SpaceVehicle
            key={space.id}
            space={space}
            selected={selectedSpace?.id === space.id}
            onClick={() =>
              onSelectSpace(selectedSpace?.id === space.id ? null : space)
            }
          />
        ))}
      </div>

      {/* CENTER */}
      <div className="flex-1 flex justify-between gap-2 min-h-0">
        {/* LEFT */}
        <div className="flex flex-col justify-between flex-1">
          {/* ROAD */}
          <div className="flex items-center gap-1 mb-1 opacity-80">
            <ArrowLeft className="text-white" size={16} />

            <div className="flex-1 border-t-2 border-dashed border-white" />

            <ArrowLeft className="text-white" size={16} />
          </div>

          {/* PARKING */}
          <div className="bg-white/50 rounded-lg p-1 border border-zinc-300">
            <div className="grid grid-cols-6 gap-1">
              {leftSpaces.map((space) => (
                <SpaceVehicle
                  key={space.id}
                  space={space}
                  selected={selectedSpace?.id === space.id}
                  onClick={() =>
                    onSelectSpace(selectedSpace?.id === space.id ? null : space)
                  }
                />
              ))}
            </div>
          </div>

          {/* ROAD */}
          <div className="flex items-center gap-1 mt-1 opacity-80">
            <ArrowLeft className="text-white" size={16} />

            <div className="flex-1 border-t-2 border-dashed border-white" />

            <ArrowLeft className="text-white" size={16} />
          </div>
        </div>

        {/* CENTER ROAD */}
        <div className="relative flex items-center justify-center px-1">
          <div className="h-full border-l-2 border-dashed border-white" />

          <div className="absolute left-4 top-0 bottom-0 border-l-2 border-dashed border-white" />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between flex-1">
          {/* ROAD */}
          <div className="flex items-center gap-1 mb-1 opacity-80">
            <ArrowRight className="text-white" size={16} />

            <div className="flex-1 border-t-2 border-dashed border-white" />

            <ArrowRight className="text-white" size={16} />
          </div>

          {/* PARKING */}
          <div className="bg-white/50 rounded-lg p-1 border border-zinc-300">
            <div className="grid grid-cols-6   gap-1">
              {rightSpaces.map((space) => (
                <SpaceVehicle
                  key={space.id}
                  space={space}
                  selected={selectedSpace?.id === space.id}
                  onClick={() =>
                    onSelectSpace(selectedSpace?.id === space.id ? null : space)
                  }
                />
              ))}
            </div>
          </div>

          {/* ROAD */}
          <div className="flex items-center gap-1 mt-1 opacity-80">
            <ArrowRight className="text-white" size={16} />

            <div className="flex-1 border-t-2 border-dashed border-white" />

            <ArrowRight className="text-white" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};