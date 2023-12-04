import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import ToggleMode from "./components/layout/ToggleMode";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
    <div className="flex">
      <AppRoutes />
      <ToggleMode />
    </div>
    </Provider>
  );
}

export default App;
