import React, { useContext, useState } from "react";
import { globalContext } from "../Contexts/globalContext";
import { Cube, Send } from "./icons";
import NewTodoForm from "./NewTodoForm";
import { TodoContext } from "../Contexts/TodoContext";
const listItems = [
  { name: "پشتیبانی قالب", color: "bg-orange-100" },
  { name: "فریلنس", color: "bg-green-200" },
  { name: "اجتماعی", color: "bg-red-500" },
  { name: "دوستان", color: "bg-blue-300" },
  { name: "کدنویسی", color: "bg-gray-300" },
];

export default function TodoAside() {
  const { toggleShadow } = useContext(globalContext);
  const { setItem, isSideBarOpen, setIsSideBarOpen } = useContext(TodoContext);
  const [isNewTodoOpen, setIsNewTodoOpen] = useState(false);

  function closeNewTodoForm() {
    setIsNewTodoOpen(false);
  }

  function submitNewTodoForm(values) {
    setItem(values);
  }

  return (
    <div
      className={`${
        toggleShadow ? "shadow-active" : ""
      } ${isSideBarOpen ? "absolute inset-0 flex z-[1000] w-full" : "pc:hidden"} w-1/3 rounded-lg overflow-hidden`}
    >
      <div className="bg-white w-full pc:w-1/3">
        <div className="p-5">
          <button
            onClick={() => setIsNewTodoOpen(true)}
            className="bg-blue-500 text-white rounded-md w-full py-2"
          >
            + وظیفه جدید
          </button>
        </div>
        <ul className="todo-aside-list">
          <li>
            <div>
              <Cube size={18} />
              <button>همه</button>
            </div>
          </li>
          <li>
            <div>
              <Send size={18} />
              <button>وظیفه من</button>
            </div>
          </li>
        </ul>
        <span className="mx-5 my-4 block font-bold text-sm">برچسب ها</span>
        <ul className="todo-aside-list">
          {listItems.map((item) => (
            <li key={item.name} className="last:mb-5 last:border-none">
              <div>
                <span className={`${item.color} w-3 h-3 rounded-full`}></span>
                <span className="text-sm">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isNewTodoOpen && (
        <NewTodoForm
          allItems={listItems}
          closeForm={closeNewTodoForm}
          submitForm={submitNewTodoForm}
        />
      )}
      {isSideBarOpen && <div onClick={() => setIsSideBarOpen(false)} className="bg-gray-300/50 w-full h-full"></div>}
    </div>
  );
}
