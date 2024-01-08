import React, { useContext } from "react";
import { Logout, Check, Edit, Trash, Star, Cancel } from "./icons";
import SmallButton from "./SmallButton";
import { TodoContext } from "../Contexts/TodoContext";
import TodoLabel from "./TodoLabel";
import TodoParticipants from "./TodoParticipants";

export default function TodoDetails({ data }) {
  const { setSelectedTodo, changeState } = useContext(TodoContext);
  return (
    <div className="box-container absolute inset-0">
      <div className="flex justify-between items-center border-b-[1px] pb-5">
        <div className="flex gap-3">
          <button onClick={() => setSelectedTodo("")}>
            <Logout />
          </button>
          <span className="font-medium">{data.title}</span>
        </div>
        <div className="flex gap-3">
          {data.isChecked && (
            <SmallButton isInTodoList title="تاریخ" bgColor="bg-green-500 px-3">
              <div className="flex items-center gap-2 text-sm font-medium  ">
                <Check color="#000" size={14} /> اتمام یافته
              </div>
            </SmallButton>
          )}
          <SmallButton hasBorder title="ویرایش وظیفه">
            <Edit size={14} />
          </SmallButton>
          <SmallButton
            onClickHandler={() => changeState(data.id, "isDeleted")}
            hasBorder
            title="حذف وظیفه"
          >
            <Trash size={14} />
          </SmallButton>
        </div>
      </div>
      <div className="main">
        <div className="flex justify-between items-center py-5">
          <TodoParticipants participants={data.participants} />
          <div className="flex gap-3 items-center">
            <TodoLabel labels={data.labels} />
            <Star color={data.hasStar ? "#FFB822" : "#BABABA"} size={18} />
            <div className="text-gray-300 text-xs font-medium whitespace-nowrap flex flex-col gap-2">
              <span>
                {data.date}
              </span>
              <span>
                {data.time}
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm leading-6">{data.content}</p>
      </div>
    </div>
  );
}
