import React, { useContext } from "react";
import { globalContext } from "../Contexts/globalContext";
import { Cube, Send } from "./icons";
import Swal from "sweetalert2";

export default function TodoAside() {
  const { toggleShadow } = useContext(globalContext);

  const listItems = [
    { name: "پشتیبانی قالب", color: "bg-orange-100" },
    { name: "فریلنس", color: "bg-green-200" },
    { name: "اجتماعی", color: "bg-red-500" },
    { name: "دوستان", color: "bg-blue-300" },
    { name: "کدنویسی", color: "bg-gray-300" },
  ];

  const createNewTodo = () => {
    Swal.fire({
      html: `<div class="absolute inset-0 bg-white overflow-hidden rounded-lg">
      <div class="flex justify-between bg-gray-200 p-5">
        <span>وظیفه جدید</span>
        <button class="bg-white rounded-full">
          <Cancel color="#000"/>
        </button>
      </div>
      <form >
        <div>
            <label htmlFor="title">عنوان وظیفه</label>
            <input type="text" class="border-[1px] border-gray-300"/>
        </div>
        <div>
            <label htmlFor="title">برچسب ها</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="title">فرصت نهایی</label>
            <input type="text" placeholder="11/12/2023"/>
            <input type="text" placeholder="00:51"/>
        </div>
        <div>
            <label htmlFor="title">مشارکت کنندگان</label>
            <button></button>
            <div>
                <ul>
                    <li>1</li>
                </ul>
            </div>
        </div>
        <div>
            <label htmlFor="">توضیحات</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">ایجاد</button>
      </form>
    </div>`,
    });
  };

  return (
    <div
      className={`${
        toggleShadow ? "shadow-active" : ""
      } w-1/3 bg-white rounded-lg`}
    >
      <div className="p-5">
        <button
          onClick={createNewTodo}
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
          <li key={item.name} className="last:mb-5">
            <div>
              <span className={`${item.color} w-3 h-3 rounded-full`}></span>
              <button>{item.name}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
