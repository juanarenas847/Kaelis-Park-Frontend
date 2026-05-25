import { Bell, ChevronDown } from "lucide-react";

export const Header = () => {

    return (
        <header className="
            h-14
            bg-white
            border-b
            border-gray-200
            px-4
            flex
            justify-end
            items-center
        ">

            <div className="flex items-center gap-4">

                {/* Notifications */}
                <button className="
                    relative
                    w-10
                    h-10
                    rounded-full
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                ">

                    <Bell size={18} />

                    <span className="
                        absolute
                        top-0
                        right-0
                        bg-red-500
                        text-white
                        text-[8px]
                        w-4
                        h-4
                        rounded-full
                        flex
                        items-center
                        justify-center
                    ">
                        3
                    </span>

                </button>

                {/* User */}
                <div className="flex items-center gap-2">

                    <img
                        src="https://i.pravatar.cc/150"
                        alt="profile"
                        className="
                            w-10
                            h-10
                            rounded-full
                            object-cover
                        "
                    />

                    <div>

                        <h3 className="font-semibold text-xs">
                            Juan Arenas
                        </h3>

                        <p className="text-[10px] text-gray-500">
                            Estudiante
                        </p>

                        

                    </div>
                    
                    <ChevronDown size={18} />

                </div>

            </div>

        </header>
    );
};