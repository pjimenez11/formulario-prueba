import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./auth/pages/LoginPage";
import RegisterPage from "./auth/pages/RegisterPage";
import PageRoutes from "./routes/PageRoutes";
import { useState } from "react";

export default function AppRoutes() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <Routes>
        {isLogged ? (
          <>
            <Route path="/formu/*" element={<PageRoutes />} />
            <Route path="/*" element={<Navigate to="/formu/panel" />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
