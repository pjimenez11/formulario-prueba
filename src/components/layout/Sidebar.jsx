import { HiMiniXMark } from "react-icons/hi2";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiListCheck3 } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import { RiUser3Line } from "react-icons/ri";
import { RiSettings3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const initialNavigation = [
  {
    name: "Panel",
    href: "/formu/panel",
    icon: <AiOutlineDashboard className="w-6 h-6" />,
    current: false,
  },
  {
    name: "Formularios",
    href: "/formu/formularios",
    icon: <LuClipboardList className="w-6 h-6" />,
    current: false,
  },
  {
    name: "Asignaciones",
    href: "/formu/asignaciones",
    icon: <RiListCheck3 className="w-6 h-6" />,
    current: false,
  },
  {
    name: "Usuarios",
    href: "/formu/usuarios",
    icon: <RiUser3Line className="w-6 h-6" />,
    current: false,
  },
  {
    name: "Configuración",
    href: "/formu/configuracion",
    icon: <RiSettings3Line className="w-6 h-6" />,
    current: false,
  },
];
export default function Sidebar({ toggleSidebarVisibility, toggleSidebar }) {
  const [navigation, setNavigation] = useState(initialNavigation);

  const path = window.location.pathname;

  const onCurrent = (href) => {
    setNavigation((prev) =>
      prev.map((item) => {
        if (item.href === href) {
          item.current = true;
        } else {
          item.current = false;
        }
        return item;
      })
    );
  };

  useEffect(() => {
    onCurrent(path);
  }, [path]);

  return (
    <aside
      className={`fixed md:flex flex-col w-64 h-screen ${
        toggleSidebar || "hidden"
      } z-50 px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700 transition-all`}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img className="w-auto h-14 sm:h-16" src="logo.png" alt="" />
          <h1 className="font-semibold">FormuGenius</h1>
        </a>
        <button
          aria-label="Toggle Sidebar"
          className=" focus:outline-none md:hidden"
          onClick={toggleSidebarVisibility}
        >
          <HiMiniXMark className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
                item.current &&
                "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              }`}
              onClick={() => {onCurrent(item.href), toggleSidebarVisibility()}}
            >
              {item.icon}
              <span className="mx-4 font-medium">{item.name}</span>
            </NavLink>
          ))}
          <hr className="my-6 border-gray-200 dark:border-gray-600" />
        </nav>

        <a href="#" className="flex items-center px-4 -mx-2">
          <img
            className="object-cover mx-2 rounded-full h-9 w-9"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
            John Doe
          </span>
        </a>
      </div>
    </aside>
  );
}
