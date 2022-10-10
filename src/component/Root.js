import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export const QuizContext = createContext([]);
export const CartContext = createContext([]);
const Root = () => {
  const data = useLoaderData().data;
  const [cart, setCart] = useState([]);
  return (
    <QuizContext.Provider value={data}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </QuizContext.Provider>
  );
};

export default Root;
