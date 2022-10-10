import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Root from "./Root";
import Statistics from "./Statistics";
import Topics from "./Topics";

export const router = createBrowserRouter([
    {
        path: '/', errorElement: <ErrorPage/>, element: <Root/>,children:[
            {
                path: '/', element: <Home/>
            },
            {
                path: '/home', element: <Home/>
            },
            {
                path: '/statistics', element: <Statistics/>
            },
            {
                path: '/topics', element: <Topics/>
            },
            {
                path: '/blog', element: <Blog/>
            }
        ]
    }
])