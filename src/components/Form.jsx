import { TEInput, TERipple } from "tw-elements-react";

export default function Form() {
  return (
    <section className="h-full">
      <form className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <TEInput type="text" label="Nombre" className="mb-4"></TEInput>
              <TEInput type="text" label="Apellido" className="mb-4"></TEInput>
            </div>
            <TEInput type="text" label="Empresa" className="mb-4"></TEInput>
            <TEInput
              type="text"
              label="Nombre de usuario"
              className="mb-4"
            ></TEInput>
            <TEInput
              type="password"
              label="Contraseña"
              className="mb-4"
            ></TEInput>
            <TEInput
              type="password"
              label="Confirmar contraseña"
              className="mb-4"
            ></TEInput>
            
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <TERipple className="w-full">
              <button className="w-full h-12 bg-primary text-white rounded-lg">
                Registrarse
              </button>
            </TERipple>
          </div>
        </div>
      </form>
    </section>
  );
}
