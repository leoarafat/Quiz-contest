import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import QuizQuestion from "./QuizQuestion";
import Root from "./Root";
import Statistics from "./Statistics";
import Topics from "./Topics";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/`);
        },
        element: <Home />,
      },
      {
        path: "/home",
        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/`);
        },
        element: <Home />,
      },
      {
        path: "/quiz/:id",
        loader: async({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element: <QuizQuestion />,

      },

      {
        path: "/topics",
        element: <Topics />,
      },

      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
