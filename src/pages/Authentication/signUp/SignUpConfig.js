import SignUp from "./SignUp";

export const SignUpConfig = {
    routes: [
        {
            path: "/auth/signup",
            exact: true,
            element: <SignUp />
        }
    ]
}