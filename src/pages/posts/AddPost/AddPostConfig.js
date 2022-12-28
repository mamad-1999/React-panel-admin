import { lazy } from "react"
import PostPageProvider from "../../../context/PostPageContext"

const AddPostPage = lazy(() => import("./AddPostPage"))

export const AddPostConfig = {
    routes: [
        {
            path: "/posts/addpost",
            element: <PostPageProvider><AddPostPage /></PostPageProvider>
        }
    ]
} 