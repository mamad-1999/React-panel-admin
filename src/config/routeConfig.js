// import configs 

import { AddPostConfig } from "../pages/posts/AddPost/AddPostConfig"
import { PostListConfig } from "../pages/posts/PostList/PostListConfig"
import { UserListConfig } from "../pages/users/userList/UserListConfig"
import { AddUserConfig } from "../pages/users/addUser/AddUserConfig"
import { CalendarConfig } from "../pages/calendar/CalendarPage/CalendarConfig"
import { AddEventsConfig } from "../pages/calendar/AddEvents/AddEventsConfig"

// route configs

const routeConfigs = [
    ...AddPostConfig.routes,
    ...PostListConfig.routes,
    ...UserListConfig.routes,
    ...AddUserConfig.routes,
    ...CalendarConfig.routes,
    ...AddEventsConfig.routes
]

const routes = [
    ...routeConfigs,
]

export default routes