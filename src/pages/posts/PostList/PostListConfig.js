import { lazy } from "react";

const PostListPage = lazy(() => import("./PostListPage"))

export const PostListConfig = {
    routes: [
        {
            path: "/posts/postlist",
            element: <PostListPage />
        }
    ]
}