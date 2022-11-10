import AddPostPage from "./AddPostPage"

export const AddPostConfig = {
    routes: [
        {
            path: "/posts/addpost",
            exact: true,
            element: <AddPostPage />
        }
    ]
} 