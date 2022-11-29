import UserListPage from "./UserListPage"

export const UserListConfig = {
    routes: [
        {
            path: "/userlist",
            exact: true,
            element: <UserListPage />
        }
    ]
}