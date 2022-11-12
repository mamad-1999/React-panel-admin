import PostListPage from "./PostListPage";

export const PostListConfig = {
    routes: [
        {
            path: "/posts/postlist",
            exact: true,
            element: <PostListPage />
        }
    ]
}