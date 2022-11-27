// import configs 

import { AddPostConfig } from "../pages/posts/AddPost/AddPostConfig"
import { PostListConfig } from "../pages/posts/PostList/PostListConfig"
import { UserListConfig } from "../pages/users/UserListConfig"

// route configs

const routeConfigs = [
    ...AddPostConfig.routes,
    ...PostListConfig.routes,
    ...UserListConfig.routes
]

const routes = [
    ...routeConfigs,
]

export default routes