import React from "react";
import "./main.css";
import { App } from "./App.js";
import { createRoot } from "react-dom/client";
import { FiltersProvider } from "./context/filtersContext.jsx";
const root = createRoot(document.getElementById("app"));
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
