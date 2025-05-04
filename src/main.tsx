import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Board } from "./assets/components/Board/Board";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Board />
  </StrictMode>
);
