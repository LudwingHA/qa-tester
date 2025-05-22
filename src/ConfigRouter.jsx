import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
    {path: '/',
        element: <App></App>
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/register',
        element: <RegisterPage></RegisterPage>
    }
])
export default router