import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import DashboardPanel from "../pages/dashboard/DashboardPanel"
import RootLayout from "../components/PanelLayout/RootLayout";
import routes from "../config/routeConfig";
import NotFound from "../pages/error/404/NotFound"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<DashboardPanel />} />
            {
                routes.map((route, index) => (
                    <Route key={index} {...route} />
                ))
            }
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notfound" />} />
        </Route>
    )
)

export default router