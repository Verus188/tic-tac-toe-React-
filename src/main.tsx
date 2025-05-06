import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Board } from "./assets/components/Board/Board";
import { App } from "./assets/components/App/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
