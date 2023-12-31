import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";


const storedTheme = localStorage.theme;
const initialDarkToggle =
  storedTheme === "dark" ||
  (storedTheme !== "light" &&
    document.documentElement.className.includes("dark"));

export default function ToggleMode() {
  const [darkToggle, setDarkToggle] = useState(initialDarkToggle);

  useEffect(() => {
    if (darkToggle) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkToggle]);

  return (
    <div className="fixed flex p-1 rounded-md right-3 bottom-3 z-50 ">
      <button onClick={() => setDarkToggle((prev) => !prev)}>
        {darkToggle ? <IoSunny className="w-6 h-6 text-yellow-300"/> : <FaMoon className="w-6 h-6 text-gray-800"/>}
      </button>
    </div>
  );
}
