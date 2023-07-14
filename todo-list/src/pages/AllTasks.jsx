import React from "react";
import Todo from "../components/Todo";
import { useNote, useView } from "../components/TodoContext";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiGrid41 } from "react-icons/ci";
import TodoButton from "../components/TodoButton";

const AllTasks = () => {
  const { note} = useNote();
  const { view, gridView } = useView();
  const selectedView = view ? "text-violet-600" : "text-slate-400";
  const nonSelectedView = view ? "text-slate-400" : "text-violet-600";
  const viewClass = view ? "grid-cols-1" : "grid-cols-3";
  // console.log(view);

  const reversedNote = [...note].reverse();
  return (
    <div className="mx-8">
      <div className=" text-2xl font-semibold text-slate-600 mt-2 ">
        All tasks
      </div>
      <div>
        <div className="flex gap-2 my-8">
          <button onClick={gridView} disabled={view}>
            <AiOutlineUnorderedList
              className={`text-2xl font-medium ${selectedView}`}
            />
          </button>
          <button onClick={gridView} disabled={!view}>
            <CiGrid41 className={`text-2xl font-medium ${nonSelectedView}`} />
          </button>
        </div>
      </div>
      <div
        className={`mt-4 grid gap-2 sm:gap-4 xl:gap-6 items-end ${viewClass}`}
      >
        {note.map((noteItem, index) => {
          return (
            <Todo
              key={index}
              id={index}
              title={noteItem.title}
              desc={noteItem.desc}
              date={noteItem.date}
              completed={noteItem.completed}
              important={noteItem.important}
            />
          );
        })}
        <TodoButton />
      </div>
    </div>
  );
};

export default AllTasks;
