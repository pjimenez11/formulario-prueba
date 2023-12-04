import { MdCheck, MdOutlineCancel, MdOutlineCreate } from "react-icons/md";

export default function RowTableForms({ form }) {
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
    <tr key={form.id}>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        {form.application_number}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {form.date}
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
            form.status === "approved" && "text-emerald-500 bg-emerald-100/60"
          } ${form.status === "canceled" && "text-red-500 bg-red-100/60"} ${
            form.status === "assigned" && "text-gray-500 bg-gray-100/60"
          } dark:bg-gray-800`}
        >
          {form.status === "approved" && <MdCheck className="w-4 h-4" />}
          {form.status === "assigned" && (
            <MdOutlineCreate className="w-4 h-4" />
          )}
          {form.status === "canceled" && (
            <MdOutlineCancel className="w-4 h-4" />
          )}
          <h2 className="text-sm font-normal">{onStatus(form.status)}</h2>
        </div>
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
              {form.requesting}
            </h2>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <img
            className="object-cover w-8 h-8 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
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
    </tr>
  );
}
