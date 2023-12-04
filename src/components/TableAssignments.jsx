import { useNavigate } from "react-router-dom";

export default function TableAssignments() {

    const navigate = useNavigate();

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
            Acciones
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        <tr>
          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
            #3066
          </td>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            Jan 6, 2022
          </td>
          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h2 className="text-sm font-normal">Aprobado</h2>
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
                  Arthur Melo
                </h2>
                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                  Developer
                </p>
              </div>
            </div>
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center gap-x-6">
              <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none" onClick={() => navigate("/formu/asignaciones/edit")}>
                Visualizar
              </button>
            </div>
          </td>
        </tr>

        <tr>
          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
            #3064
          </td>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            Jan 5, 2022
          </td>
          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 3L3 9M3 3L9 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h2 className="text-sm font-normal">Cancelado</h2>
            </div>
          </td>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <div className="flex items-center gap-x-2">
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
              <div>
                <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                  Andi Lane
                </h2>
                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                  Developer
                </p>
              </div>
            </div>
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center gap-x-6">
              <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none" onClick={() => navigate("/formu/asignaciones/edit")}>
                Visualizar
              </button>
            </div>
          </td>
        </tr>

        <tr>
          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
            #3062
          </td>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            Jan 4, 2022
          </td>
          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div className="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10"
                  stroke="#667085"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h2 className="text-sm font-normal">Pendiente</h2>
            </div>
          </td>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <div className="flex items-center gap-x-2">
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"
                alt=""
              />
              <div>
                <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                  Orlando Diggs
                </h2>
                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                  Developer
                </p>
              </div>
            </div>
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center gap-x-6">
              <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none" onClick={() => navigate("/formu/asignaciones/edit")}>
                Visualizar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
