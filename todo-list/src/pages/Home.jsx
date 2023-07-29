import React, { useState } from "react";
import Leftbar from "../components/Leftbar";
import { Outlet } from "react-router-dom";
import Rightbar from "../components/Rightbar";
import Header from "../components/Header";
import { useDarkMode, useModal, useNote, useView } from "../components/TodoContext";
import Todo from "../components/Todo";

const Home = () => {
  const { darkMode } = useDarkMode();
  const { getFilteredNote, searchQuery } = useNote();
  const filteredTodos = getFilteredNote();
  const {openModal}=useModal()
  

  // const { getFilteredNote } = useNote();

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="fixed z-10">
        <Leftbar />
      </div>
      <div className=" bg-slate-200 min-h-screen mx-64 dark:bg-slate-900">
        <Header />

        {searchQuery.trim() === "" ? (
          <Outlet />
        ) : (
          <div
            className={`mt-4 grid grid-cols-3 gap-2 sm:gap-4 xl:gap-6 items-end mx-8`}
          >
           { filteredTodos.map((task, index) => (
            <Todo
              key={index}
              id={index}
              title={task.title}
              desc={task.desc}
              date={task.date}
              completed={task.completed}
              important={task.important}
            />
            ) 
            )}
          </div>
        )}
      </div>
      <div className="fixed right-0 top-0 bottom-0">
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
