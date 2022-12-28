import { lazy } from "react"

const FAQPage = lazy(() => import("./FAQPage"))

export const FAQConfig = {
    routes: [
        {
            path: "/FAQ",
            element: <FAQPage />
        }
    ]
}