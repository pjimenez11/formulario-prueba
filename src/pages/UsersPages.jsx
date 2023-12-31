import { useNavigate } from "react-router-dom";
import TableUsers from "../components/TableUsers";
import { useEffect } from "react";
import useUsers from "../hooks/useUsers";
import useAuth from "../auth/hooks/useAuth";

export default function UsersPage() {
  const navigate = useNavigate();
  const { getUsers } = useUsers();
  const { login } = useAuth();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="flex flex-col">
      {
        (login.user.role == "admin" && (
          <div className="flex flex-row justify-end">
            <button
              className="flex items-center justify-center px-2 py-1.5 space-x-2 text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={() => navigate("/formu/usuarios/nuevo-usuario")}
            >
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 4v16m8-8H4"></path>
              </svg>
              <span>Nuevo Usuario</span>
            </button>
          </div>
        ))
      }

      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full py-2 align-middle ">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <TableUsers />
          </div>
        </div>
      </div>
    </section>
  );
}
