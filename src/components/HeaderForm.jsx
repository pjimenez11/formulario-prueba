export default function HeaderForm() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-blue-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-md p-2">
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
      <div className="flex flex-col items-center">
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
  );
}
