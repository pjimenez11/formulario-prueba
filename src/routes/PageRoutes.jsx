import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Form from "../components/Form";

export default function PageRoutes() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const toggleSidebarVisibility = () => {
    setToggleSidebar((prev) => !prev);
  };
  return (
    <>
      <Header toggleSidebarVisibility={toggleSidebarVisibility} />
      <Sidebar
        toggleSidebarVisibility={toggleSidebarVisibility}
        toggleSidebar={toggleSidebar}
      />
      <main className="md:ml-64 w-full min-h-[calc(100vh-64px)] mt-16 bg-neutral-100 dark:bg-gray-800">
        <Form />
      </main>
    </>
  );
}
