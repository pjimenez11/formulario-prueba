import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import ToggleMode from "./components/layout/ToggleMode";

function App() {
  return (
    <div className="flex">
      <AppRoutes />
      <ToggleMode />
    </div>
  );
}

export default App;
