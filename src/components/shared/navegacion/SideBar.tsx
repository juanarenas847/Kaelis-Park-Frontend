import  Logo  from "../../../assets/images/Logo-Kaelis.png";
import { House,Calendar,CarFront, QrCode, User,CircleHelp } from "lucide-react"
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    const menuItems = [ 
        {
        name:"Inicio",
        path:"/home",
        icon: <House size={16} />
    },
        {
        name:"Reservas",
        path:"/reservations",
        icon: <Calendar size={16} />
    },
        {
        name:"Mis Vehiculos",
        path:"/vehicles",
        icon: <CarFront size={16} />
    },
        {
        name:"Qr de ingreso",
        path:"/qr",
        icon: <QrCode size={16} />
    },
        {
        name:"Perfil",
        path:"/profile",
        icon: <User size={16} />
    },
        {
        name:"Ayuda",
        path:"/help",
        icon: <CircleHelp size={16} />
    },

];

    return (
      <aside className="w-40 shrink-0 min-h-0 overflow-hidden bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="px-1 py-1 border-b border-gray-100">
          <div className="flex items-center gap-1">
            <img src={Logo} alt="Kaelis" className="w-8" />

            <div>
              <h1 className="font-bold text-xs">KAELIS PARK</h1>

              <p className="text-[10px] text-gray-500">
                Parqueadero  Pascual Bravo
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-2 py-3">
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                                flex
                                items-center
                                gap-2
                                px-3
                                py-2
                                rounded-lg
                                transition
                                font-medium
                                text-[11px]
                                ${
                                  isActive
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-gray-700 hover:bg-gray-100"
                                }
                                `
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>
    );
};