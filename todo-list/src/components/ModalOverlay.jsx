import React, { useState } from "react";
import { useModal, useNote } from "./TodoContext";

const date = new Date();
const formattedDate = date.toLocaleDateString("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
});

const ModalOverlay = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { note, setNote, addNote } = useNote();
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
    date: formattedDate,
    important: false,
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevNote) => {
      return { ...prevNote, [name]: value };
    });
    // console.log(todo);
  };
  const submitNote = (e) => {
    e.preventDefault();
    addNote(todo);

    closeModal();
    // console.log(note);
  };

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-0 overflow-y-auto h-full w-full z-20 flex justify-center items-center">
      <div
        className="fixed inset-0 w-full h-full bg-slate-600 opacity-20"
        onClick={closeModal}
      ></div>
      <div className=" w-[34%] relative rounded-lg bg-slate-200 py-6 px-5">
        <div className=" text-2xl text-slate-600">Add a task</div>
        <form className="flex flex-col">
          <div className="my-4">
            <div>title</div>
            <input name="title" onChange={handleChange} className="w-full rounded-md py-3 px-4 mt-1" placeholder="e.g, study for the test" required/>
          </div>
          <div className="mb-4">
            <div>description</div>
            <textarea name="desc" onChange={handleChange} className="mt-1 rounded-md py-3 px-4 w-full" placeholder="e.g, study for the test"/>
          </div>
          <div>
            <div>

            </div>
          </div>

          <button onClick={submitNote} className="mt-1 rounded-md py-3 px-4 w-full bg-violet-600 text-white">Add a task</button>
        </form>
      </div>
    </div>
  );
};

export default ModalOverlay;
