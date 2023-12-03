import { HiBars3 } from "react-icons/hi2";
import Dropdown from "../Dropdown";

export default function Header({ toggleSidebarVisibility }) {
  return (
    <header className="fixed top-0 md:pl-64 z-50 w-full bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <dev className="flex items-center">
        <div className="flex flex-1 items-center justify-start h-16 ">
          <button
            aria-label="Toggle Sidebar"
            className="p-4 focus:outline-none md:hidden"
            onClick={toggleSidebarVisibility}
          >
            <HiBars3 className="h-6 w-6" />
          </button>
        </div >
          <Dropdown />
      </dev>
    </header>
  );
}
