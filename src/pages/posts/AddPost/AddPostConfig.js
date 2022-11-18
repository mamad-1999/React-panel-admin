import AddPostPage from "./AddPostPage"
import PostPageProvider from "../../../context/PostPageContext"

export const AddPostConfig = {
    routes: [
        {
            path: "/posts/addpost",
            exact: true,
            element: <PostPageProvider><AddPostPage /></PostPageProvider>
        }
    ]
} 