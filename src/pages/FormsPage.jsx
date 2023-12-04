import { useNavigate } from "react-router-dom";
import TableForms from "../components/TableForms";
import { useEffect } from "react";
import useForms from "../hooks/useForms";
import formsApi from "../apis/formsApi";
import useUsers from "../hooks/useUsers";
import useAuth from "../auth/hooks/useAuth";

export default function FormsPage() {
  const { login } = useAuth();
  const { getForms, newForm } = useForms();
  const { getUsers } = useUsers();
  useEffect(() => {
    getForms();
  }, []);

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/formu/formularios/nuevo-formulario");
  };
  return (
    <section className="flex flex-col">
      {login.user.role == "admin" && (
        <div className="flex flex-row justify-end">
          <button
            className="flex items-center justify-center px-2 py-1.5 space-x-2 text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={onNavigate}
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
            <span>Nuevo formulario</span>
          </button>
        </div>
      )}
      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full py-2 align-middle ">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <TableForms />
          </div>
        </div>
      </div>
    </section>
  );
}
