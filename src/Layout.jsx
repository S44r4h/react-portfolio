import React from "react";
import Navbar from "./Navbar";
import Background from "./Background";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <Navbar />  */}
      <div className="flex h-screen w-screen justify-center items-center ">
        {/*<main className="bg-neutral rounded-box text-neutral-content h-9/10 w-9/10  shadow-sm">  */}
        <Outlet />
        {/* </main>  */}
      </div>
    </>
  );
};

export default Layout;
