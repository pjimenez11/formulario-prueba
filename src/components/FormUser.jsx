import { FiSave } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { TEInput } from "tw-elements-react";

export default function FormUser() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-row justify-end">
        <button
          className="flex items-center justify-center px-2 py-1.5 space-x-2 text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={() => navigate("/formu/usuarios")}
        >
          <FiSave className="w-4 h-4 text-white" />
          <span>Guardar</span>
        </button>
      </div>
      <div className="flex justify-center">
        <form className="flex flex-col gap-3 w-full md:w-3/4">
        <div className="relative flex flex-wrap gap-3">
            <div className="flex-1">
              <TEInput type="text" label="Nombre" className="mb-4"></TEInput>
            </div>
            <div className="flex-1">
              <TEInput type="text" label="Apellido" className="mb-4"></TEInput>
            </div>
          </div>
          <TEInput
            type="text"
            label="Nombre de usuario"
            className="mb-4"
          ></TEInput>
          <TEInput
            type="text"
            label="Contraseña"
            className="mb-4"
          ></TEInput>
        </form>
      </div>
    </section>
  );
}
