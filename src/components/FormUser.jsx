import { useState } from "react";
import { FiSave } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { TEInput } from "tw-elements-react";
import useUsers from "../hooks/useUsers";

const initialUser = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  role: "tester",
};

export default function FormUser() {
  const navigate = useNavigate();

  const { saveUser } = useUsers();

  const [user, setUser] = useState(initialUser);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const onSubmit = () => {
    saveUser(user);
    navigate("/formu/usuarios");
  };

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-row justify-end">
        <button
          className="flex items-center justify-center px-2 py-1.5 space-x-2 text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={onSubmit}
        >
          <FiSave className="w-4 h-4 text-white" />
          <span>Guardar</span>
        </button>
      </div>
      <div className="flex justify-center">
        <form className="flex flex-col gap-3 w-full md:w-3/4">
          <div className="relative flex flex-wrap gap-3">
            <div className="flex-1">
              <TEInput
                type="text"
                label="Nombre"
                className="mb-4"
                name="first_name"
                value={user.first_name}
                onChange={onInputChange}
              ></TEInput>
            </div>
            <div className="flex-1">
              <TEInput
                type="text"
                label="Apellido"
                className="mb-4"
                name="last_name"
                value={user.last_name}
                onChange={onInputChange}
              ></TEInput>
            </div>
          </div>
          <TEInput
            type="text"
            label="Email"
            className="mb-4"
            name="email"
            value={user.email}
            onChange={onInputChange}
          ></TEInput>
          <TEInput
            type="text"
            label="Contraseña"
            className="mb-4"
            name="password"
            value={user.password}
            onChange={onInputChange}
          ></TEInput>
          <div className="flex flex-wrap items-stretch w-full">
            <label
              className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid dark:bg-gray-900 bg-blue-300 border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              htmlFor="inputGroupSelect01"
            >
              Rol
            </label>
            <select
              className="form-select relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-gray-800 bg-blue-200 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              id="inputGroupSelect01"
              value={user.role}
              name="role"
              onChange={onInputChange}
            >
              <option value="tester">Tester</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
}
