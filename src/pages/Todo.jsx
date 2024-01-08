import React from "react";
import { TodoAside, TodoFilterBox, TodoItems } from "../components";
import TodoContextProvider from "../Contexts/TodoContext";

export default function Todo() {
  return (
    <TodoContextProvider>
      <div className="flex gap-8 p-8 relative">
        <TodoAside />
        <div className="w-full flex flex-col gap-8 relative">
          <TodoFilterBox />
          <TodoItems />
        </div>
      </div>
    </TodoContextProvider>
  );
}
