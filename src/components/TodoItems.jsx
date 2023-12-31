import React, { useContext } from "react";
import { dragOverHandler } from "../utilities";
import { globalContext } from "../Contexts/globalContext";
import { TodoContext } from "../Contexts/TodoContext";
import TodoItem from "./TodoItem";
import TodoDetails from "./TodoDetails";

export default function TodoItems() {
  const { toggleShadow } = useContext(globalContext);
  const { selectedTodo, filteredItems} = useContext(TodoContext);

  return (
    <div
      onDragOver={dragOverHandler}
      onDragEnter={(e) => e.preventDefault()}
      className={`${
        toggleShadow ? "shadow-active" : ""
      } bg-white rounded-lg custom-scrollbar max-h-[370px] overflow-y-scroll overflow-hidden list-container`}
    >
      {filteredItems.length > 0 ? (
        filteredItems.map((data) => (
          <TodoItem key={data.id} {...data}/>
        ))
      ) : (
        <span className="text-center font-medium block py-2">
          وظیفه ای وجود ندارد
        </span>
      )}
      {selectedTodo && <TodoDetails data={selectedTodo}/>}
    </div>
  );
}
