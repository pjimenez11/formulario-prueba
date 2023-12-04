import { Fragment, useEffect } from "react";
import useUsers from "../hooks/useUsers";

export default function Approval({userAsign, setUserAsign}) {
  const { getUsers, users } = useUsers();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="flex flex-col items-center gap-3 bg-blue-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-md p-2">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Aprobación
      </h2>
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
                <option value={user.id} >
                  {user.first_name} {user.last_name}
                </option>
              ) : null}
            </Fragment>
          ))}
        </select>
      </div>
    </div>
  );
}
