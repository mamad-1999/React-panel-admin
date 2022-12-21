import PostAddIcon from '@mui/icons-material/PostAdd';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';

const navigationConfig = [
    {
        id: "Main",
        title: "MAIN",
        type: "group",
        children: [
            {
                id: "dashboard",
                title: "Dashboard",
                type: "item",
                icon: <DashboardIcon />,
                url: "/",
                exact: true,
            },
            {
                id: "posts",
                title: "Posts",
                type: "collapse",
                icon: <PostAddIcon />,
                children: [
                    {
                        id: "all posts",
                        title: "All Posts",
                        type: "item",
                        url: "/posts/postlist",
                        exact: true,
                    },
                    {
                        id: "add post",
                        title: "Add Post",
                        type: "item",
                        url: "/posts/addpost",
                        exact: true,
                    },
                ],
            },
            {
                id: "users",
                title: "Users",
                type: "item",
                icon: <PeopleIcon />,
                url: "/userlist",
                exact: true
            },
            {
                id: "calendar",
                title: "Calendar",
                type: "item",
                icon: <CalendarTodayIcon />,
                url: "/calendar",
                exact: true,
            },
        ],
    },
    {
        id: "divider-1",
        type: "divider",
    },
    {
        id: "Documentation",
        title: "DOCUMENTATION",
        type: "group",
        children: [
            {
                id: "React Admin",
                title: "React Admin",
                type: "link",
                icon: <ArticleIcon />,
                exact: true,
            },
        ],
    },
];

export default navigationConfig;
