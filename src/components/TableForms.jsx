import useAuth from "../auth/hooks/useAuth";
import useForms from "../hooks/useForms";
import { MdCheck, MdOutlineCancel, MdOutlineCreate } from "react-icons/md";
import RowTableForms from "./RowTableForms";
import { Fragment } from "react";

export default function TableForms() {
  const { forms } = useForms();
  const { login } = useAuth();

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
          
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        {forms.map((form) => (
          <Fragment key={form.id}>
            <RowTableForms form={form} />
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
