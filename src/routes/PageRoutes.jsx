import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Form from "../components/Form";
import { Navigate, Route, Routes } from "react-router-dom";

export default function PageRoutes() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const toggleSidebarVisibility = () => {
    setToggleSidebar((prev) => !prev);
  };
  return (
    <>
      <Header toggleSidebarVisibility={toggleSidebarVisibility} />
      <Sidebar
        toggleSidebarVisibility={toggleSidebarVisibility}
        toggleSidebar={toggleSidebar}
      />
      <main className="md:ml-64 w-full min-h-[calc(100vh-64px)] mt-16 bg-neutral-100 dark:bg-gray-800">
      <Routes>
        <Route path="/panel" element={<h1>Panel</h1>} />
        <Route path="/formularios" element={<Form />} />
        <Route path="/asignaciones" element={<h1>Asignaciones</h1>} />
        <Route path="/usuarios" element={<h1>Usuarios</h1>} />
        <Route path="/configuracion" element={<h1>Configuración</h1>} />
        <Route path="/*" element={<Navigate to="/formu/panel" />} />
      </Routes>
      </main>
    </>
  );
}
