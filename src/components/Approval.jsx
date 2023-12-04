import { Fragment, useEffect } from "react";
import useUsers from "../hooks/useUsers";
import useForms from "../hooks/useForms";

export default function Approval({ form, onInputChange, userAsign, setUserAsign }) {
  const { getUsers, users } = useUsers();
  const { isCreate } = useForms();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="flex flex-col items-center gap-3 bg-blue-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-md p-2">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Aprobación
      </h2>
      {isCreate ? (
        <div className="flex flex-wrap items-stretch w-full">
          <label
            className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid dark:bg-gray-900 bg-blue-300 border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            htmlFor="inputGroupSelect01"
          >
            Responsable
          </label>
          <select
            className="form-select relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-gray-800 bg-blue-200 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            id="inputGroupSelect01"
            value={userAsign}
            onChange={(e) => setUserAsign(e.target.value)}
          >
            {users.map((user) => (
              <Fragment key={user.id}>
                {user.role === "admin" ? (
                  <option value={user.id}>
                    {user.first_name} {user.last_name}
                  </option>
                ) : null}
              </Fragment>
            ))}
          </select>
        </div>
      ) : (
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-10 rounded-[4px] border border-solid border-neutral-300 dark:border-neutral-600 p-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Prioridad:
            </h3>
            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                id="inlineRadio9"
                value="canceled"
                checked={form.status === "canceled"}
                name="status"
                onChange={(e) => onInputChange(e)}
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="inlineRadio9"
              >
                Cancelar
              </label>
            </div>
            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                id="inlineRadio7"
                value="approved"
                checked={form.status === "approved"}
                name="status"
                onChange={(e) => onInputChange(e)}
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="inlineRadio7"
              >
                Aprobar
              </label>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}
