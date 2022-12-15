import { lazy } from "react";

const DashboardPanel = lazy(() => import("./DashboardPanel"))

export const DashboardConfig = {
    routes: [
        {
            path: "/dashboard",
            exact: true,
            element: DashboardPanel
        }
    ]
}