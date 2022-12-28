import { lazy } from "react"

const UserListPage = lazy(() => import("./UserListPage"))

export const UserListConfig = {
    routes: [
        {
            path: "/userlist",
            element: <UserListPage />
        }
    ]
}