import React, { useState, useContext } from "react";
import { Move, Star, Trash, Logout } from "./icons";
import SmallButton from "./SmallButton";
import { TodoContext } from "../Contexts/TodoContext";
import TodoLabel from "./TodoLabel";
import TodoParticipants from "./TodoParticipants";

export default function TodoItem(data) {
  const [isDragged, setIsDragged] = useState(false);
  const { setSelectedTodo, filterLabel, changeState } = useContext(TodoContext);

  const dragStartHandler = (e) => {
    var img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    e.dataTransfer.setDragImage(img, 0, 0);
    setIsDragged(true);
  };

  return (
    <div
      draggable
      onDragStart={dragStartHandler}
      onDragEnd={() => setIsDragged(false)}
      key={data.id}
      className={`${data.isChecked ? "bg-[#EBEBEB]" : "bg-white"} ${
        data.isDeleted && filterLabel !== "حذف شده" ? "hidden" : "flex"
      } ${
        isDragged ? "opacity-60" : "opacity-100"
      } justify-between items-center py-3 px-5 first:rounded-t-lg last:rounded-b-lg z-[99] item`}
    >
      <div className="flex gap-3 items-center">
        <div className="cursor-move">
          <Move size={18} />
        </div>
        <input
          onChange={() => changeState(data.id, "isChecked")}
          type="checkbox"
          checked={data.isChecked}
        />
        <div className="cursor-pointer" onClick={() => changeState(data.id, "hasStar")}>
          <Star color={data.hasStar ? "#FFB822" : "#BABABA"} size={18} />
        </div>
        <span
          onClick={() => setSelectedTodo(data)}
          className={`${
            data.isChecked ? "line-through text-green-500" : ""
          } text-sm cursor-pointer`}
        >
          {data.title}
        </span>
      </div>
      <div className="flex gap-3 items-center justify-end max-w-full">
        <TodoLabel labels={data.labels} />
        <TodoParticipants participants={data.participants}/>
        <div className="cursor-pointer">
          <div onClick={() => changeState(data.id, "isDeleted")}>
            {data.isDeleted ? (
              <SmallButton isInTodoList title="برگرداندن">
                <Logout size={18} color="#FF3F3F" />
              </SmallButton>
            ) : (
              <Trash size={18} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
