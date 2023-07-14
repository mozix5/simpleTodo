import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiBell } from "react-icons/hi";
import { useNote } from "./TodoContext";
const Header = () => {
  // const [searchQuery, setSearchQuery] = useState("");

  const currentDate = new Date();
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

 


  return (
    <div className="py-5 dark:text-slate-400 px-8 flex justify-between items-center ">
      <div className="w-80 relative flex-1 ">
        <input
          type="text"
          placeholder="Search task"
          className="py-3.5 px-3 rounded-lg w-80 dark:bg-slate-800"
          
        />
        <BiSearch className="absolute top-4 text-xl right-4 text-slate-400" />
      </div>
      <div className="flex-1 flex justify-center pl-6">{formattedDate}</div>
      <div className="flex-1 flex justify-end items-center gap-6">
        <HiBell className="text-2xl text-violet-600 dark:text-violet-800" />
        <button className=" w-36 text-white py-3 rounded-lg bg-violet-600 hover:bg-violet-700 dark:bg-violet-800">
          Add new task
        </button>
      </div>
    </div>
  );
};

export default Header;
