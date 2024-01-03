import React from "react";
import "./main.css";
import { App } from "./App.js";
import { createRoot } from "react-dom/client";
import { FiltersProvider } from "./context/FiltersContext";
const root = createRoot(document.getElementById("app"));
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
