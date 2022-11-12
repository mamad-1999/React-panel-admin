// import configs 

import { AddPostConfig } from "../pages/posts/AddPost/AddPostConfig"
import { PostListConfig } from "../pages/posts/PostList/PostListConfig"

// route configs

const routeConfigs = [
    ...AddPostConfig.routes,
    ...PostListConfig.routes
]

const routes = [
    ...routeConfigs,
]

export default routes