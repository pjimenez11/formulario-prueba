import { useNavigate } from "react-router-dom";
import useAssignment from "../hooks/useAssignment";

export default function TableAssignments() {
  const { assignments } = useAssignment();
  const navigate = useNavigate();

  const onNavigate = (id) => {
    navigate(`/formu/asignaciones/edit/${id}`);
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
            Proyecto
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
        {assignments.map((assignment) => (
          <tr key={assignment.id}>
            <td className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-900 dark:text-gray-100">
              {assignment.application_number}
            </td>

            <td className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-900 dark:text-gray-100">
              {assignment.date_created}
            </td>

            <td className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-900 dark:text-gray-100">
              {assignment.form}
            </td>

            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              <div className="flex items-center gap-x-2">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src="https://cdn.vectorstock.com/i/preview-1x/73/23/developer-icon-defi-related-vector-41827323.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                    {assignment.requesting}
                  </h2>
                </div>
              </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
              <div className="flex items-center gap-x-6">
                <button
                  className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                  onClick={() => onNavigate(assignment.form_id)}
                >
                  Visualizar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
