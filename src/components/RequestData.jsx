export default function RequestData() {
  return (
    <div className="flex flex-col gap-2 items-center justify-around bg-blue-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-md p-2">
      <div className="flex flex-wrap items-stretch w-full">
        <span
          className="flex items-center whitespace-nowrap dark:bg-gray-900 bg-blue-300 rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          id="nro-solicitud"
        >
          Nro Solicitud
        </span>
        <input
          type="text"
          className="relative m-0 block w-[1px] min-w-0 flex-auto dark:bg-gray-800 bg-blue-200 rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
          placeholder="XXX-YYY-Z-RL-NNN"
          aria-label="Nro Solicitud"
          aria-describedby="nro-solicitud"
        />
      </div>
      <div className="flex flex-wrap items-stretch w-full">
        <label
          className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid dark:bg-gray-900 bg-blue-300 border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          htmlFor="solicitante"
        >
          Solicitante
        </label>
        <input
          type="text"
          className="relative m-0 block w-[1px] min-w-0 flex-auto dark:bg-gray-800 bg-blue-200 rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
          placeholder="Jose Camino"
          value={"Jose Camino"}
          aria-label="Soliciante"
          aria-describedby="solicitante"
          disabled
        />
      </div>
      <div className="flex flex-wrap items-stretch w-full">
        <label
          className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid dark:bg-gray-900 bg-blue-300 border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          htmlFor="proyecto"
        >
          Proyecto
        </label>
        <input
          type="text"
          className="relative m-0 block w-[1px] min-w-0 flex-auto dark:bg-gray-800 bg-blue-200 rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
          placeholder="Nombre del proyecto"
          aria-label="Proyecto"
          aria-describedby="proyecto"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <div className="flex flex-wrap items-stretch w-full lg:w-1/2">
          <span
            className="flex items-center whitespace-nowrap dark:bg-gray-900 bg-blue-300 rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            id="fecha-solicitud"
          >
            Fecha solicitud
          </span>
          <input
            type="date"
            className="relative m-0 block w-[1px] min-w-0 flex-auto dark:bg-gray-800 bg-blue-200 rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
            aria-describedby="fecha-solicitud"
          />
        </div>
        <div className="flex flex-wrap items-stretch w-full lg:w-1/2">
          <span
            className="flex items-center whitespace-nowrap dark:bg-gray-900 bg-blue-300 rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            id="lugar"
          >
            Lugar
          </span>
          <input
            type="text"
            className="relative m-0 block w-[1px] min-w-0 flex-auto dark:bg-gray-800 bg-blue-200 rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
            placeholder="Lugar de la solicitud"
            aria-label="Lugar"
            aria-describedby="lugar"
          />
        </div>
      </div>
    </div>
  );
}
