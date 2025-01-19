import { StrictMode } from "react";
import "./styles/main.css";
import { createRoot } from "react-dom/client";
import App from "./app";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
