import {
  ChevronRight,
} from "lucide-react"

export const CardSpaceSteps = () => {
  return (
    <div className="w-full  flex flex-col gap-1">
      {/* STEPS */}
      <div className="bg-white border border-black/20 rounded-lg p-2 flex items-center justify-around">

        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
            1
          </div>

          <div>
            <h3 className="font-semibold text-xs text-blue-600">
              Selecciona Un espacio
            </h3>

            <p className="text-[10px] text-zinc-500">
              Elige un lugar ideal
            </p>
          </div>

        </div>

        <ChevronRight className="text-zinc-400" size={16} />

        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full border flex items-center justify-center font-semibold text-zinc-500 text-sm">
            2
          </div>

          <div>
            <h3 className="font-semibold text-xs">
              Confirmar Detalles
            </h3>

            <p className="text-[10px] text-zinc-500">
              Revisa tu reserva
            </p>
          </div>

        </div>

        <ChevronRight className="text-zinc-400" size={16} />

        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full border flex items-center justify-center font-semibold text-zinc-500 text-sm">
            3
          </div>

          <div>
            <h3 className="font-semibold text-xs">
              Reserva exitosa
            </h3>

            <p className="text-[10px] text-zinc-500">
              Tu espacio queda seguro
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}