import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import TodaysTasks from "./pages/TodaysTasks";
import UncompletedTasks from "./pages/UncompletedTasks";
import ImportantTasks from "./pages/ImportantTasks";
import { TodoContext } from "./components/TodoContext";

const App = () => {
  return (
    <TodoContext>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="completed" element={<CompletedTasks />} />
            <Route path="today" element={<TodaysTasks />} />
            <Route path="uncompleted" element={<UncompletedTasks />} />
            <Route path="important" element={<ImportantTasks />} />
          </Route>
        </Routes>
      </div>
    </TodoContext>
  );
};

export default App;
