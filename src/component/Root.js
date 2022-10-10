import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export const QuizContext = createContext([]);
const Root = () => {
  const data = useLoaderData().data;
  return (
    <QuizContext.Provider value={data}>
      <Header />
      <Outlet />
      <Footer />
    </QuizContext.Provider>
  );
};

export default Root;
