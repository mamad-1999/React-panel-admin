import DashboardPanel from "./DashboardPanel";

export const DashboardConfig = {
    routes: [
        {
            path: "/dashboard",
            exact: true,
            element: DashboardPanel
        }
    ]
}