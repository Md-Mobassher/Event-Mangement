import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Providers from "./lib/provider/Provider.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>
);
