

const estados = [
  { nombre: "Disponible", color: "bg-green-400" },
  { nombre: "Ocupado", color: "bg-red-400" },
  { nombre: "Reservado", color: "bg-yellow-400" },
  { nombre: "En Curso", color: "bg-gray-300" },
  { nombre: "Seleccionado", color: "bg-blue-600" },
];

export const EstadoLeyenda = () => {
  return (
    <div className="w-full  bg-white px-4 py-3">
      <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600">
        {estados.map((estado) => (
          <div key={estado.nombre} className="flex items-center gap-2">
            <span
              className={`
                w-3
                h-3
                rounded-full
                border
                border-gray-300
                ${estado.color}
              `}
            />
            <span>{estado.nombre}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
