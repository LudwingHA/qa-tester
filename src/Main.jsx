import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Styles.css"
import { RouterProvider } from "react-router-dom";
import router from "./ConfigRouter";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
)