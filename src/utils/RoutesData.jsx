import * as pages from "../pages"

export const routesData = [
    {
        element: <pages.Home/>,
        // element: <pages.TestPage/>,
        path: "/",
        label: "home",
    },
    {
        element: <pages.TestPage/>,
        path: "/test",
        label: "Test page",
    },
]
