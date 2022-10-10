import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Root from "./Root";
import Statistics from "./Statistics";

import Topics from "./Topics";

export const router = createBrowserRouter([
    {
        path: '/',
        loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
        }, errorElement: <ErrorPage/>, element: <Root/>,children:[
            {
                path: '/',

                 element: <Home/>
            },
            {
                path: '/home',
                // loader: async () =>{
                //     return fetch(`https://openapi.programming-hero.com/api/quiz/`)
                // } ,
                 element: <Home/>
            },

            {
                path: '/topics', 
                element: <Topics/>
            },
           
            {
                path: '/statistics', element: <Statistics/>
            },
            {
                path: '/blog', element: <Blog/>
            }
        ]
    }
])