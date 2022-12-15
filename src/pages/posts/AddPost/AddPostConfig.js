import { lazy } from "react"
import PostPageProvider from "../../../context/PostPageContext"

const AddPostPage = lazy(() => import("./AddPostPage"))

export const AddPostConfig = {
    routes: [
        {
            path: "/posts/addpost",
            exact: true,
            element: <PostPageProvider><AddPostPage /></PostPageProvider>
        }
    ]
} 