import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import DashboardPanel from "../pages/dashboard/DashboardPanel"
import RootLayout from "../components/PanelLayout/RootLayout";
import routes from "../config/routeConfig";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<DashboardPanel />} />
            {
                routes.map((route, index) => (
                    <Route key={index} {...route} />
                ))
            }
        </Route>
    )
)

export default router