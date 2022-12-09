import PostAddIcon from '@mui/icons-material/PostAdd';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ErrorIcon from '@mui/icons-material/Error';
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
                badge: {
                    title: "2",
                    bg: "#525E8A",
                    fg: "#FFFFFF",
                },
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
        id: "Pages",
        title: "Pages",
        type: "group",
        children: [
            {
                id: "Authentication",
                title: "Authentication",
                type: "collapse",
                icon: <LockPersonIcon />,
                children: [
                    {
                        id: "Login",
                        title: "Login",
                        type: "item",
                        url: "/pages/auth/login",
                        exact: true,
                    },
                    {
                        id: "Register",
                        title: "Register",
                        type: "item",
                        url: "/pages/auth/register",
                        exact: true,
                    },
                    {
                        id: "Forgot Password",
                        title: "Forgot Password",
                        type: "item",
                        url: "/pages/auth/forgot-password",
                        exact: true,
                    },
                ],
            },
            {
                id: "FAQ",
                title: "FAQ",
                type: "item",
                icon: <ContactSupportIcon />,
                url: "/FAQ",
                exact: true,
            },
            {
                id: "Errors",
                title: "Errors",
                type: "collapse",
                icon: <ErrorIcon />,
                badge: {
                    title: "new",
                    bg: "#513E8A",
                    fg: "#FFFFFF",
                },
                children: [
                    {
                        id: "404",
                        title: "404",
                        type: "item",
                        url: "/pages/errors/error-404",
                        exact: true,
                    },
                    {
                        id: "500",
                        title: "500",
                        type: "item",
                        url: "/pages/errors/error-500",
                        exact: true,
                    },
                ],
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
