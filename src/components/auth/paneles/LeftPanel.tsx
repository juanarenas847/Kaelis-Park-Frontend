import logo from "../../../assets/images/Logo-Kaelis.png";

export const LeftPanel = () => {
  return (
    <div
      className="
    w-full
    lg:w-1/2

    bg-[#081028]

    relative

    flex
    flex-col
    lg:justify-center
    items-center

    text-white

    lg:overflow-hidden

    px-6
    py-8
    lg:py-12
"
    >
      {/* Círculo superior */}

      <div
        className="
                    absolute
                    -top-24
                    right-0
                    w-44
                    h-44
                    sm:w-56
                    sm:h-56
                    rounded-full
                    opacity-70
                    rotate-150
                    bg-[linear-gradient(90deg,#081429_32%,#082566_74%,#053CBE_93%,#0952FF_100%)]
                "
      />

      {/* Círculo inferior */}

      <div
        className="
                    absolute
                    -bottom-16
                    -left-10
                    w-36
                    h-36
                    sm:w-44
                    sm:h-44
                    rounded-full
                    opacity-70
                    bg-[linear-gradient(90deg,#081429_32%,#082566_74%,#053CBE_93%,#0952FF_100%)]
                "
      />

      {/* Logo */}

      <div
        className="
                w-32
                h-32
                sm:w-44
                sm:h-44
                z-10
            "
      >
        <img
          src={logo}
          alt="Kaelis Park"
          className="
                        w-full
                        h-full
                        object-contain
                    "
        />
      </div>

      {/* Título */}

      <h1
        className="
                text-3xl
                sm:text-5xl
                font-bold
                mb-4
                text-center
                z-10
            "
      >
        KAELIS <span className="text-blue-500">PARK</span>
      </h1>

      {/* Subtítulo */}

      <p
        className="
                text-center
                text-sm
                text-gray-300
                z-10
            "
      >
        Sistema Gestor de Parqueaderos
      </p>

      {/* Descripción */}

      <p
        className="
                text-center
                text-sm
                sm:text-base
                text-gray-300
                leading-7
                max-w-md
                mt-4
                z-10
            "
      >
        Administración inteligente y segura para controlar el acceso, vehículos
        y operaciones de tu parqueadero.
      </p>

      {/* Indicadores */}

      <div
        className="
                flex
                gap-4
                mt-10
                z-10
            "
      >
        <div
          className="
                    w-4
                    h-4
                    rounded-full
                    bg-blue-500
                "
        />

        <div
          className="
                    w-4
                    h-4
                    rounded-full
                    bg-yellow-400
                "
        />

        <div
          className="
                    w-4
                    h-4
                    rounded-full
                    bg-red-500
                "
        />
      </div>
    </div>
  );
};
