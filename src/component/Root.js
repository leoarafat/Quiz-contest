import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export const LoadContext = createContext([]);

const Root = () => {
  const loadData = useLoaderData().data
  // console.log(loadData)
  
  return (
    <LoadContext.Provider value={loadData}>
      <Header />
      <Outlet />
      <Footer />
    </LoadContext.Provider>
  );
};

export default Root;
