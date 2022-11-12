import AddUserPage from "./AddUserPage";

export const AddUserConfig = {
    routes: [
        {
            path: "/user/adduser",
            exact: true,
            element: <AddUserPage />
        }
    ]
}