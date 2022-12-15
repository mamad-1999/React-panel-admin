import { lazy } from "react";

const CalendarPage = lazy(() => import("./CalendarPage"))

export const CalendarConfig = {
    routes: [
        {
            path: "/calendar",
            exact: true,
            element: <CalendarPage />
        }
    ]
}