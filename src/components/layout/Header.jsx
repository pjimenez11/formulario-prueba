export default function Header({ toggleSidebarVisibility }) {
  return (
    <header className="fixed top-0 md:left-64 z-50 w-full bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <div className=" flex items-center justify-between h-16 mx-auto">
        <button
          aria-label="Toggle Sidebar"
          className="p-4 focus:outline-none md:hidden"
          onClick={toggleSidebarVisibility}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              className="text-gray-600 fill-current"
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
