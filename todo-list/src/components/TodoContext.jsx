import React, { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext();
const NoteContext = createContext();
const ViewContext = createContext();
const DarkModeContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};
export const useNote = () => {
  return useContext(NoteContext);
};
export const useView = () => {
  return useContext(ViewContext);
};
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const TodoContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [note, setNote] = useState([]);
  const [view, setView] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Retrieve data from local storage on component mount
    const storedNote = localStorage.getItem("note");
    if (storedNote) {
      setNote(JSON.parse(storedNote));
    }
  }, []);

  useEffect(() => {
    // Store data in local storage whenever note changes
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  const gridView = () => {
    setView((preValue) => {
      return !preValue;
    });
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const addNote = (note) => {
    setNote((prevNote) => {
      return [ note,...prevNote];
    });
  };
  const deleteNote = (id) => {
    setNote((prevNote) => {
      return prevNote.filter((value, index) => {
        return index !== id;
      });
    });
  };

  const toggleComplete = (id) => {
    setNote((prevNote) => {
      return prevNote.map((note, index) => {
        // index===id?{...note,completed:!note.completed}:note
        if (index === id) {
          return { ...note, completed: !note.completed }; 
        } else {
          return note;
        }
      });
    });
  };

  const importantNotes = (id) => {
    setNote((prevNote) => {
      return prevNote.map((note, index) => {
        if (index === id) {
          return { ...note, important: !note.important }; // Toggle the note's important property
        } else {
          return note;
        }
      });
    });
  };

  const getCurrentDayTasks = () => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    return note.filter((task) => task.date === currentDate);
  };

  const searchTasksByTitle = (query) => {
    setSearchQuery(query);
  };

  const getFilteredNote = () => {
    return note.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const toggleDarkMode=()=>{
    setDarkMode((preValue)=>{
      return !preValue
    })
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      <NoteContext.Provider
        value={{
          note,
          setNote,
          addNote,
          deleteNote,
          importantNotes,
          toggleComplete,
          getCurrentDayTasks,
          searchTasksByTitle,
          getFilteredNote,
          searchQuery,
          setSearchQuery,
        }}
      >
        <ViewContext.Provider value={{ view, gridView }}>
          <DarkModeContext.Provider value={{ darkMode,toggleDarkMode }}>
            {children}
          </DarkModeContext.Provider>
        </ViewContext.Provider>
      </NoteContext.Provider>
    </ModalContext.Provider>
  );
};
