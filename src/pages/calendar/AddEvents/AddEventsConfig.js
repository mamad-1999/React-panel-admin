import { lazy } from "react";

const AddEventsPage = lazy(() => import("./AddEventsPage"))

export const AddEventsConfig = {
    routes: [
        {
            path: "/calendar/addevent",
            exact: true,
            element: <AddEventsPage />
        }
    ]
}