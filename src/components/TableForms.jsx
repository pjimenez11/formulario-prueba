import useForms from "../hooks/useForms";
import { MdCheck, MdOutlineCancel, MdOutlineCreate } from "react-icons/md";

export default function TableForms() {
  const { forms } = useForms();

  const onStatus = (status) => {
    if (status === "approved") {
      return "Aprobado";
    }
    if (status === "assigned") {
      return "Asignado";
    }
    if (status === "canceled") {
      return "Cancelado";
    }
  };
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Nro de Solicitud
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Fecha
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Estado
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Solicitante
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Revisor
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Acciones
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        {forms.map((form) => (
          <tr key={form.id}>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
              #{form.application_number}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              {form.date_created}
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                  form.status === "approved" &&
                  "text-emerald-500 bg-emerald-100/60"
                } ${
                  form.status === "canceled" && "text-red-500 bg-red-100/60"
                } ${
                  form.status === "assigned" && "text-gray-500 bg-gray-100/60"
                } dark:bg-gray-800`}
              >
                { form.status === "approved" && <MdCheck className="w-4 h-4"/>}
                { form.status === "assigned" && <MdOutlineCreate className="w-4 h-4"/>}
                { form.status === "canceled" && <MdOutlineCancel className="w-4 h-4"/>}
                <h2 className="text-sm font-normal">{onStatus(form.status)}</h2>
              </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              <div className="flex items-center gap-x-2">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div>
                  <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                    {form.requesting}
                  </h2>
                </div>
              </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              <div className="flex items-center gap-x-2">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fH Compare this snippet from src/components/TableForms.jsx: xid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"
                  alt=""
                />
                <div>
                  {form.assigned_users.map((user, index) => (
                    <h2
                      key={index}
                      className="text-sm font-medium text-gray-800 dark:text-white "
                    >
                      {user.first_name} {user.last_name}
                    </h2>
                  ))}
                  <p className="text-xs font-normal text-gray-600 dark:text-gray-400"></p>
                </div>
              </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
              <div className="flex items-center gap-x-6">
                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                  Editar
                </button>

                <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                  Descargar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
