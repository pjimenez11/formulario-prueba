import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
  const { handlerLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({ user: { email: "", password: "" } });
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSingIn = async () => {
    handlerLogin(user);
  };

  return (
    <section className="min-h-screen w-full flex justify-center items-center p-4">
      <div className="rounded-lg bg-white shadow-lg dark:bg-neutral-900 sm:w-8/12 lg:w-5/12 w-full h-min px-4 text-neutral-800 dark:text-neutral-200">
        <div className="text-center">
          <img className="mx-auto w-48" src="logo.png" alt="logo" />
          <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
            Nosotros somos FormuGenius
          </h4>
        </div>
        <form onSubmit={onSingIn}>
          <p className="mb-4">Por favor, ingrese a su cuenta</p>
          <TEInput
            type="email"
            label="Email"
            className="mb-4"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></TEInput>
          <TEInput
            type={showPassword ? "text" : "password"}
            label="Contraseña"
            className="mb-4"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <div className="flex items-center mb-4">
            <input
              className="relative float-left h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox"
              id="showPassword"
              onChange={togglePasswordVisibility}
            />
            <label
              className="inline-block ml-3 hover:cursor-pointer"
              htmlFor="showPassword"
            >
              Mostrar contraseña
            </label>
          </div>

          <div className="mb-12 pb-1 pt-1 text-center">
            <TERipple rippleColor="light" className="w-full">
              <button
                className=" inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                type="submit"
                style={{
                  background:
                    "linear-gradient(to right, #246bee, #36add8, #36ddc1, #45b484)",
                }}
              >
                Iniciar
              </button>
            </TERipple>
          </div>
          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">¿No tienes una cuenta?</p>
            <TERipple rippleColor="light">
              <button
                type="button"
                className="inline-block rounded border-2 border-cyan-300 px-6 pb-[6px] pt-2 text-xs font-semibold uppercase leading-normal text-cyan-500 transition duration-150 ease-in-out hover:border-cyan-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-cyan-600 focus:border-cyan-600 focus:text-cyan-600 focus:outline-none focus:ring-0 active:border-cyan-700 active:text-cyan-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Registrarse
              </button>
            </TERipple>
          </div>
        </form>
      </div>
    </section>
  );
}
