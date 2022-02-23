import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../Contexts/Auth";

export function Home() {
  const authValue = useContext(authContext);
  const userInfo = authValue.user;

  const handleLogOut = async() => {
    await authValue.logOut()
  }

  if(authValue.loading) return <h1>Loading</h1>

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-700">
      <header className="bg-slate-500 w-screen p-2 text-white">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl ml-5">SCP APP</h1>
          <div className="flex items-center gap-3">
            <ul className="flex gap-3">
              <li className="hover:border-b-2">To-Do App</li>
              <li className="hover:border-b-2">Noticias</li>
              <li className="hover:border-b-2">Configuración</li>
            </ul>
            <div className="flex items-center gap-3 text-xs mr-5">
              <div className="hidden md:block">Sesión de: {userInfo.email}</div>
              <button className="bg-red-500 hover:bg-red-400 p-2 rounded-md" onClick={handleLogOut}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </header>
      <Outlet/>
    </div>
  );
}
