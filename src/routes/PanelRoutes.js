import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import DashboardPanel from "../pages/dashboard/DashboardPanel"
import routes from "../config/routeConfig";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardPanel />}>
            {
                routes.map((route, index) => (
                    <Route key={index} {...route} />
                ))
            }
        </Route>
    )
)

export default router