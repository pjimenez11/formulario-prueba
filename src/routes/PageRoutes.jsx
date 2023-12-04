import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import FormsPage from "../pages/FormsPage";
import Form from "../components/Form";
import AssignmentsPage from "../pages/AssignmentsPage";
import UsersPage from "../pages/UsersPages";
import FormUser from "../components/FormUser";

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
        <Route path="formularios/nuevo-formulario" element={<Form />} />
        <Route path="/asignaciones" element={<AssignmentsPage />} />
        <Route path="/asignaciones/edit" element={<Form />} />
        <Route path="/usuarios" element={<UsersPage />} />
        <Route path="/usuarios/nuevo-usuario" element={<FormUser />} />

        <Route path="/configuracion" element={<h1>Configuración</h1>} />
        
        <Route path="/*" element={<Navigate to="/formu/panel" />} />        
      </Routes>
      </main>
    </>
  );
}
