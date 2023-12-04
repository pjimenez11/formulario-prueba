export default function TableUsers() {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            #
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Nombre
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Apellido
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Username
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            Rol
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        <tr>
          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
            #3066
          </td>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            Jose
          </td>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            Camino
          </td>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            jCamino12345
          </td>
          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
              <h2 className="text-sm font-normal">Administrador</h2>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
