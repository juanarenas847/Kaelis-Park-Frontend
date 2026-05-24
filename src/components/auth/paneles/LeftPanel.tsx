import logo from "../../assets/images/Logo-Kaelis.png"



export const LeftPanel = () => {
    return (
        <div className="w-1/2 bg-[#081028] relative flex flex-col justify-center items-center text-white">

            {/* Círculos decorativos */}
            <div className="absolute -top-30 right-0 w-55 h-55 bg-[linear-gradient(90deg,#081429_32%,#082566_74%,#053CBE_93%,#0952FF_100%)] rounded-full opacity-70 rotate-150" />
            <div className="absolute -bottom-17.5 -left-15 w-45 h-45 bg-[linear-gradient(90deg,#081429_32%,#082566_74%,#053CBE_93%,#0952FF_100%)] rounded-full opacity-70" />

            {/* Logo */}
            <div className="w-50 h-50 ">
                <img src={logo} alt="" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-5xl font-bold mb-5">
                KAELIS <span className="text-blue-500">PARK</span>
            </h1>
            <p className="text-center text-sm text-gray-300 "> Sistema Gestor de Parqueaderos</p>


            <p className="text-center text-sm text-gray-300 leading-6 max-w-sm">
                Administración inteligente y segura para controlar el acceso,
                vehículos y operaciones de tu parqueadero.
            </p>

            {/* Indicadores */}
            <div className="flex gap-4 mt-10">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
                <div className="w-4 h-4 rounded-full bg-yellow-400" />
                <div className="w-4 h-4 rounded-full bg-red-500" />
            </div>
        </div>
    )
}
