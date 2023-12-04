import { TETextarea } from "tw-elements-react";

export default function DetailsChange() {
  return (
    <div className="flex flex-col items-center gap-3 bg-blue-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-md p-2">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Detalles del cambio
      </h2>
      <div className="flex flex-col gap-3 w-full">
        <TETextarea id="descripcion" label="Descripción" rows={4}></TETextarea>
        <TETextarea
          id="justificacion"
          label="Justificación"
          rows={4}
        ></TETextarea>
      </div>
    </div>
  );
}
