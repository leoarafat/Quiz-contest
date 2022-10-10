import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Root from "./Root";
import Statistics from "./Statistics";
import TopicDetail from "./TopicDetail";
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
                path: '/topic/:id',
                loader: async({params}) =>{
                    return fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element:<TopicDetail/>
            },
            {
                path: '/topics', 
                // loader: async ({params}) =>{
                //     return fetch (`https://openapi.programming-hero.com/api/quiz/${params.topics}`)
                // },
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