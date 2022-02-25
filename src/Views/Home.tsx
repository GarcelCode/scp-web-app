import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
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
      <header className="bg-slate-500 w-screen p-2 text-slate-300">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h1 className="text-3xl w-[8rem] ml-3 text-white">SCP APP</h1>
          <div className="flex items-center gap-3 w-full justify-between md:justify-end">
            <ul className="flex gap-6 ml-4">
              <Link to="/app/todo"><li className="hover:text-slate-100 duration-300 cursor-pointer">To-Do</li></Link>
              <Link to="/app/news"><li className="hover:text-slate-100 duration-300 cursor-pointer">Noticias</li></Link>
            </ul>
            <div className="flex items-center gap-3 text-xs mr-3">
              <div className="hidden md:block">Sesión de: {userInfo.email}</div>
              <button className="text-white bg-red-700 hover:bg-red-600 p-2 rounded-md" onClick={handleLogOut}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </header>
      <Outlet/>
    </div>
  );
}
