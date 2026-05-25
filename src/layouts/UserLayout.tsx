import { Sidebar } from "../components/shared/navegacion/SideBar";
import { Header } from "../components/shared/navegacion/Header";

interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen min-w-0 flex  bg-[#f3f5fa]">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 min-w-0 flex flex-col ">
        {/* HEADER */}
        <Header />

        {/* MAIN */}
        <main className="flex-1 min-h-0  p-1">{children}</main>
      </div>
    </div>
  );
};
