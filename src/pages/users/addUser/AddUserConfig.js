import AddUserPage from "./AddUserPage";

export const AddUserConfig = {
    routes: [
        {
            path: "/userlist/adduser",
            exact: true,
            element: <AddUserPage />,

        }
    ]
}