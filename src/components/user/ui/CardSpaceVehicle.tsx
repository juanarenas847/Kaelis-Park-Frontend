// CARD SPACE VEHICLE

import { Expand, Minus, Plus } from "lucide-react";

import { GridSpaceVehicle } from "./GridSpaceVehicle";
import type { Space } from "./spaces";
import { EstadoLeyenda } from "./EstadosLeyenda";

interface Props {
  selectedSpace: Space | null;
  onSelectSpace: (space: any | null) => void;
}

export const CardSpaceVehicle = ({ selectedSpace, onSelectSpace }: Props) => {
  return (
    <div className="bg-white border border-black/20 rounded-xl p-2 h-full min-h-0 min-w-0 flex flex-col overflow-hidden">
      {/* HEADER */}
      <div className="mb-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between shrink-0">
        <div className="min-w-0">
          <h3 className="font-semibold text-xs mb-2">Selecciona Tu Espacio</h3>

          <div className="flex flex-wrap gap-1 mt-1">
            <button className="px-2 py-1 rounded-lg bg-blue-600 text-white text-[10px]">
              Bloq-13
            </button>

            <button className="px-2 py-2 rounded-lg border border-black/10 text-[10px]">CIS</button>

            <button className="px-2 py-2 rounded-lg border border-black/10 text-[10px]">
              Bloque-2
            </button>

            <button className="px-2 py-2 rounded-lg border border-black/10 text-[10px]">
              Bloque-B
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1 shrink-0">
          <select className="border border-black/20 rounded-lg px-2 py-2 text-[10px]">
            <option>Todos los espacios</option>
          </select>

          <button className="w-8 h-8 border border-black/20 rounded-lg flex items-center justify-center">
            <Minus className="w-3 h-3" />
          </button>

          <div className="px-1 text-xs">100%</div>

          <button className="w-8 h-8 border border-black/20 rounded-lg flex items-center justify-center">
            <Plus className="w-3 h-3" />
          </button>

          <button className="w-8 h-8 border border-black/20 rounded-lg flex items-center justify-center">
            <Expand className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="flex-1 min-h-0 min-w-0 overflow-hidden">
        <GridSpaceVehicle
          selectedSpace={selectedSpace}
          onSelectSpace={onSelectSpace}
        />
      </div>
      {/*Indicador espacios*/}
      <div>
          <EstadoLeyenda />
      </div>
    </div>
  );
};
