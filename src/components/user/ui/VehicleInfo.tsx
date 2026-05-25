import { ChevronRight, Clock3 } from "lucide-react";
import Moto from "../../../assets/images/Nkd.webp"
import { Button } from './Button';

interface Props {
  space: {
    id: string;
    status: string;
    type: string;
  };
}

export const VehicleInfo = ({ space }: Props) => {
  return (
    <div className="bg-white border border-black/20 rounded-xl p-2 h-full min-h-0 flex flex-col gap-3 overflow-hidden">
      {/* BLOCK */}
      <h3 className="text-xs text-black font-bold">Tu seleccion</h3>
      <div className="flex gap-20">
        <div>
          <span className="px-2 py-1 rounded-lg bg-blue-100 text-blue-600 text-xs font-semibold">
            Bloq-13
          </span>
          {/* ID DINÁMICO */}
          <h2 className="text-3xl font-bold mt-1 truncate">{space.id}</h2>
        </div>
        {/* IMAGE */}
        <div className="flex justify-center py-2">
          <img src={Moto} className="w-26 h-20" />
        </div>
      </div>

      {/* STATUS */}
      <div className="flex justify-end">
        <span
          className={`
            px-2 py-0.5 rounded-full text-[10px] font-medium capitalize
            ${
              space.status === "disponible"
                ? "bg-green-200 text-green-800"
                : space.status === "occupied"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
            }
          `}
        >
          {space.status}
        </span>
      </div>

      {/* INFO */}
      <div className="space-y-4 text-xs">
        <div className="flex justify-between">
          <span className="text-zinc-500">Tipo</span>
          <span className="font-semibold capitalize">{space.type}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-500">Estado</span>
          <span className="font-semibold capitalize">{space.status}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Tiempo Maximo</span>
          <span className="font-semibold capitalize">6 horas</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Tarifa</span>
          <span className="font-semibold capitalize text-green-500">2.000 Pesos</span>
        </div>
      </div>
      <div className="w-full rounded-lg border border-zinc-300 bg-[#eef2ff] p-2">
        {/* TITLE */}
        <p className="text-xs text-zinc-600 mb-2">
          Tiempo restante para la reserva
        </p>

        {/* TIME */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <Clock3 className="text-blue-600" size={24} />
          </div>

          <span className="text-2xl font-bold text-black tracking-tight">
            14:52
          </span>
        </div>

        {/* PROGRESS */}
        <div className="w-full h-1 rounded-full bg-blue-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: "72%" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Button name="Continuar" icon={ChevronRight} />
        <Button
          name="Cancelar Reserva"
          color="bg-white"
          textColor="text-blue-600"
        />
      </div>
    </div>
  );
};
