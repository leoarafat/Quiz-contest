import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Quiz from "./Quiz";
// import QuizQuestion from "./QuizQuestion";
import Root from "./Root";
import Statistics from "./Statistics";
import Topics from "./Topics";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    loader: async () => {
      return fetch(`https://openapi.programming-hero.com/api/quiz/`);
    },
    element: <Root />,

    children: [
      {
        path: "/",

        element: <Home />,
      },
      {
        path: "/home",

        element: <Home />,
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
      {
        path: "/quiz/:qid",
        loader: async({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.qid}`)
        },
        element: <Quiz />,

      },
    ],
  },
]);
