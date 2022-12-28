import { lazy } from "react";

const NotFound = lazy(() => import("./NotFound"))

export const NotFoundConfig = {
    routes: [
        {
            path: "/notfound",
            element: <NotFound />
        }
    ]
}