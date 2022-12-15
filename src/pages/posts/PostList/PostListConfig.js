import { lazy } from "react";

const PostListPage = lazy(() => import("./PostListPage"))

export const PostListConfig = {
    routes: [
        {
            path: "/posts/postlist",
            exact: true,
            element: <PostListPage />
        }
    ]
}