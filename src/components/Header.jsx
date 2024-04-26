import { useDarkMode } from "../hooks/useDarkMode";
import Filters from "./Filters";
import IconMoon from "./Icons/IconMoon";
import IconSun from "./Icons/IconSun";

function Header() {
  const { stateDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="w-full flex justify-around py-4 bg-white dark:bg-slate-800 border-2 border-transparent border-b-slate-700 dark:text-slate-100 mb-5 sticky top-0 transition-colors duration-300 ease-in-out">
      <div className="flex items-center gap-x-5">
        <h1 className="text-2xl font-bold">Carrito de compras</h1>
      </div>

      <div>
        <Filters />
      </div>

      <div
        className={`w-10 h-10 rounded-full flex items-center ${
          stateDarkMode === "light" ? "bg-yellow-500" : "bg-slate-900"
        } transition-colors duration-300 ease-linear`}
      >
        <button
          onClick={toggleDarkMode}
          className={`w-full flex justify-center items-center rounded-full h-full w-screentransition-transform duration-300 ease-in-out`}
        >
          {stateDarkMode === "light" ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
