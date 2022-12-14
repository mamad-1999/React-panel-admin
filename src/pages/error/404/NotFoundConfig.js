import NotFound from "./NotFound";

export const NotFoundConfig = {
    routes: [
        {
            path: "/notfound",
            exact: true,
            element: <NotFound />
        }
    ]
}