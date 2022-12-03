import AddEventsPage from "./AddEventsPage";

export const AddEventsConfig = {
    routes: [
        {
            path: "/calendar/addevent",
            exact: true,
            element: <AddEventsPage />
        }
    ]
}