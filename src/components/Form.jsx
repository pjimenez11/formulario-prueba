import { TETextarea } from "tw-elements-react";
import { FiSave } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export default function Form() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-row justify-end">
        <button
          className="flex items-center justify-center px-2 py-1.5 space-x-2 text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={() => navigate("/formu/formularios")}
        >
          <FiSave className="w-4 h-4 text-white" />
          <span>Guardar</span>
        </button>
      </div>
      <div className="flex items-center justify-around bg-blue-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-md p-2">
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Logotipo_empresa.png"
            alt="logo"
            className="object-cover h-20"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Company ABC
          </span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Solicitud de cambio
          </h1>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="h-8" />
            <span className="text-sm font-bold text-blue-600 ">
              https://formu-genius.netlify.app/
            </span>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 items-center justify-around bg-blue-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-md p-2">
          <div className="flex flex-wrap items-stretch w-full">
            <span
              className="flex items-center whitespace-nowrap dark:bg-gray-900 bg-blue-300 rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              id="basic-addon1"
            >
              Nro Solicitud
            </span>
            <input
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto dark:bg-gray-800 bg-blue-200 rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
              placeholder="XXX-YYY-Z-RL-NNN"
              aria-label="Nro Solicitud"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="flex flex-wrap items-stretch w-full">
            <label
              className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid dark:bg-gray-900 bg-blue-300 border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              htmlFor="inputGroupSelect01"
            >
              Solicitante
            </label>
            <select
              className="form-select relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-gray-800 bg-blue-200 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              id="inputGroupSelect01"
              placeholder="Seleccione..."
              aria-label="Seleccione..."
            >
              <option value="1">Carlos Torres</option>
              <option value="2">Marcos Loor</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            <div className="flex flex-wrap items-stretch w-full lg:w-1/2">
              <span
                className="flex items-center whitespace-nowrap dark:bg-gray-900 bg-blue-300 rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                id="basic-addon3"
              >
                Fecha solicitud
              </span>
              <input
                type="date"
                className="relative m-0 block w-[1px] min-w-0 flex-auto dark:bg-gray-800 bg-blue-200 rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
                aria-describedby="basic-addon3"
              />
            </div>
            <div className="flex flex-wrap items-stretch w-full lg:w-1/2">
              <span
                className="flex items-center whitespace-nowrap dark:bg-gray-900 bg-blue-300 rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                id="basic-addon3"
              >
                Lugar
              </span>
              <input
                type="text"
                className="relative m-0 block w-[1px] min-w-0 flex-auto dark:bg-gray-800 bg-blue-200 rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
                placeholder="Lugar de la solicitud"
                aria-label="Lugar"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 bg-blue-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-md p-2">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Detalles del cambio
          </h2>
          <div className="flex flex-col gap-3 w-full">
            <TETextarea
              id="descripcion"
              label="Descripción"
              rows={4}
            ></TETextarea>
            <TETextarea
              id="justificacion"
              label="Justificación"
              rows={4}
            ></TETextarea>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 bg-blue-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-md p-2">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Prioridad y Urgencia
          </h2>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-10 rounded-[4px] border border-solid border-neutral-300 dark:border-neutral-600 p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                Prioridad:
              </h3>
              <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="prioridad"
                  id="inlineRadio1"
                  value="BAJA"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio1"
                >
                  Baja
                </label>
              </div>
              <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="prioridad"
                  id="inlineRadio2"
                  value="MEDIA"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio2"
                >
                  Media
                </label>
              </div>
              <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="prioridad"
                  id="inlineRadio3"
                  value="ALTA"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio3"
                >
                  Alta
                </label>
              </div>
              <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="prioridad"
                  id="inlineRadio4"
                  value="CRITICA"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio4"
                >
                  Crítica
                </label>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch w-full lg:w-1/2">
              <span
                className="flex items-center whitespace-nowrap dark:bg-gray-900 bg-blue-300 rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                id="fecha-limited"
              >
                Fecha limited
              </span>
              <input
                type="date"
                className="relative m-0 block w-[1px] min-w-0 flex-auto dark:bg-gray-800 bg-blue-200 rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
                aria-describedby="fecha-limited"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
        </div>

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
            >
              <option value="1">Carlos Torres</option>
              <option value="2">Marcos Loor</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </form>
    </section>
  );
}
