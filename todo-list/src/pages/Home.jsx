import React from "react";
import Leftbar from "../components/Leftbar";
import { Outlet } from "react-router-dom";
import Rightbar from "../components/Rightbar";
import Header from "../components/Header";
import { useDarkMode } from "../components/TodoContext";

const Home = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="fixed z-10">
        <Leftbar />
      </div>
      <div className=" bg-slate-200 min-h-screen mx-64 dark:bg-slate-900">
        <Header />
        <Outlet />
      </div>
      <div className="fixed right-0 top-0 bottom-0">
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
