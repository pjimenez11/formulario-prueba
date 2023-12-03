import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./auth/pages/LoginPage";
import RegisterPage from "./auth/pages/RegisterPage";
import PageRoutes from "./routes/PageRoutes";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="/formu" element={<PageRoutes/>} />
      </Routes>
    </>
  );
}
