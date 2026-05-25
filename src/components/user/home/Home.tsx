// HOME

import { useState } from "react";

import { Building, Clock10, SquareParking } from "lucide-react";

import { CardSpaceSteps } from "../ui/CardSpaceSteps";
import { CardSpaceVehicle } from "../ui/CardSpaceVehicle";
import { InformationCard } from "../ui/InformationCard";
import { SectionName } from "../ui/SectionName";
import { VehicleInfo } from "../ui/VehicleInfo";

import type { Space } from "../ui/spaces";

export const Home = () => {
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);

  return (
    <div className="h-full min-h-0 min-w-0 overflow-hidden flex flex-col gap-1 p-1">
      {/* HEADER */}
      <div className="shrink-0">
        <SectionName
          name="Reserva de espacio"
          desc="Selecciona tu espacio y confirma tu reserva en pocos pasos"
        />
      </div>

      {/* STEPS */}
      <div className="shrink-0">
        <CardSpaceSteps />
      </div>

      {/* MAIN */}
      <div
        className={`
    flex-1 min-h-0 min-w-0
    grid gap-1 overflow-hidden
    transition-all duration-300
    ${selectedSpace ? "grid-cols-1 xl:grid-cols-[1fr_270px]" : "grid-cols-1"}
  `}
      >
        {/* LEFT */}
        <div className="min-w-0 min-h-0 flex flex-col gap-1 overflow-hidden">
          {/* INFO */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 shrink-0">
            <InformationCard
              color="green"
              text="espacios disponibles"
              number={25}
              icon={SquareParking}
            />

            <InformationCard
              color="purple"
              text="nivel seleccionado"
              number="Bloq-13"
              icon={Building}
            />

            <InformationCard
              color="yellow"
              text="tiempo restante"
              number="15:00"
              icon={Clock10}
            />
          </div>

          {/* ESTE CRECE EN ALTO */}
          <div className="flex-1 min-h-0">
            <CardSpaceVehicle
              selectedSpace={selectedSpace}
              onSelectSpace={setSelectedSpace}
            />
          </div>
        </div>

        {/* SOLO SI HAY SELECCIÓN */}
        {selectedSpace && (
          <div
            className="
      min-h-0
      overflow-hidden
      transition-all
      duration-300
      ease-out
      animate-fade-in
    "
          >
            <VehicleInfo space={selectedSpace} />
          </div>
        )}
      </div>
    </div>
  );
};
