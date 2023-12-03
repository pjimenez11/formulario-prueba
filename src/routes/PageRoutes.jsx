import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import FormsPage from "../pages/FormsPage";
import Form from "../components/Form";

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
      <main className="md:pl-72 w-full min-h-[calc(100vh-64px)] mt-16  dark:bg-gray-800 transition-all p-8">
      <Routes>
        <Route path="/panel" element={<h1>Panel</h1>} />
        <Route path="/formularios" element={<FormsPage />} />
        <Route path="/asignaciones" element={<h1>Asignaciones</h1>} />
        <Route path="/usuarios" element={<h1>Usuarios</h1>} />
        <Route path="/configuracion" element={<h1>Configuración</h1>} />
        <Route path="formularios/nuevo-formulario" element={<Form />} />
        <Route path="/*" element={<Navigate to="/formu/panel" />} />        
      </Routes>
      </main>
    </>
  );
}
