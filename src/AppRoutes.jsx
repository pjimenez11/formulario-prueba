import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./auth/pages/LoginPage";
import RegisterPage from "./auth/pages/RegisterPage";
import PageRoutes from "./routes/PageRoutes";
import useAuth from "./auth/hooks/useAuth";

export default function AppRoutes() {
  const { login } = useAuth();
  return (
    <>
      <Routes>
        {login.isAuth ? (
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
