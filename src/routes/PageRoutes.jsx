import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import FormsPage from "../pages/FormsPage";
import Form from "../components/Form";
import AssignmentsPage from "../pages/AssignmentsPage";
import UsersPage from "../pages/UsersPages";
import FormUser from "../components/FormUser";
import useAuth from "../auth/hooks/useAuth";

export default function PageRoutes() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const toggleSidebarVisibility = () => {
    setToggleSidebar((prev) => !prev);
  };
  const { login } = useAuth();
  return (
    <>
      <Header toggleSidebarVisibility={toggleSidebarVisibility} />
      <Sidebar
        toggleSidebarVisibility={toggleSidebarVisibility}
        toggleSidebar={toggleSidebar}
      />
      <main className="md:pl-72 w-full min-h-[calc(100vh-64px)] mt-16  dark:bg-gray-800 transition-all p-8">
        <Routes>
          {login.user.role === "admin" && (
            <>
              <Route path="/formularios" element={<FormsPage />} />
              <Route path="formularios/nuevo-formulario" element={<Form />} />
              <Route path="/usuarios" element={<UsersPage />} />
              <Route path="/usuarios/nuevo-usuario" element={<FormUser />} />
              <Route path="/usuarios" element={<UsersPage />} />
              <Route path="/*" element={<Navigate to="/formu/formularios" />} />
            </>
          )}
          {login.user.role === "tester" && (
            <>
              <Route path="/asignaciones" element={<AssignmentsPage />} />
              <Route path="/asignaciones/edit/:id" element={<Form />} />
              <Route path="/*" element={<Navigate to="/formu/asignaciones" />} />
            </>
          )}
        </Routes>
      </main>
    </>
  );
}
