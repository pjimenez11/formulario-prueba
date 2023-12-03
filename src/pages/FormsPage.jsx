import TableForms from "../components/TableForms";

export default function FormsPage() {
  return (
    <section class="">
      <div class="flex flex-col">
        {/*New form*/}
        <div class="flex flex-row justify-end">
          <button class="flex items-center justify-center px-2 py-1.5 space-x-2 text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <svg
              class="w-4 h-4 text-white"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 4v16m8-8H4"></path>
            </svg>
            <span>Nuevo formulario</span>
          </button>
        </div>
        <div class="overflow-x-auto ">
          <div class="inline-block min-w-full py-2 align-middle ">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <TableForms />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
