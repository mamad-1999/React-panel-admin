import { lazy } from "react";

const AddUserPage = lazy(() => import("./AddUserPage"))

export const AddUserConfig = {
    routes: [
        {
            path: "/userlist/adduser",
            exact: true,
            element: <AddUserPage />,

        }
    ]
}