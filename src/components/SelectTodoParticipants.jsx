import React, { useEffect, useState, useRef } from "react";
import useFetch from "./../hooks/useFetch";
import TodoParticipants from "./TodoParticipants";
import { Search } from "./icons";
import useDropDown from "../hooks/useDropDown";

export default function SelectTodoParticipants({users, setUsers}) {
  const inputBox = useRef();
  const { datas } = useFetch("http://localhost:4000/users");
  const [isBoxOpen, setIsBoxOpen] = useDropDown(inputBox);
  const [filteredList, setFilteredList] = useState([]);

  const [inputValue, setInputValue] = useState("");

  function searchValue(e) {
    e.preventDefault();
    setFilteredList(
      datas.filter((data) => {
        if (inputValue === "") {
          return data;
        }

        const dataValue = `${data.firstname} ${data.lastname}`;
        if (dataValue.includes(inputValue)) {
          return data;
        }
      })
    );
  }

  useEffect(() => {
    if (datas.length) {
      setUsers([datas[0], datas[1], datas[2]]);
      setFilteredList(datas);
    }
  }, [datas]);

  return (
    <div className="flex items-center w-full relative ">
      <TodoParticipants participants={users} />
      <div ref={inputBox}>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsBoxOpen((prevState) => !prevState);
          }}
          className="text-3xl text-gray-300 border-[1px] border-gray-300 hover:bg-gray-200 rounded-full flex items-center justify-center w-8 h-8 mr-2"
        >
          <span className="mb-1">+</span>
        </button>
        <div
          className={`${
            isBoxOpen ? "block" : "hidden"
          } absolute left-0 bottom-0 bg-white p-3 rounded-md shadow-lg z-[100]`}
        >
          <span className="text-xs">افزودن کاربر</span>
          <div className="border-[1px] rounded-md border-gray-300 overflow-hidden flex my-3">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="outline-none border-none text-sm px-3 py-2 w-full"
              type="text"
              placeholder="جستجوی کاربر"
            />
            <button
              onClick={searchValue}
              className="w-10 border-r-[1px] border-gray-300 flex justify-center items-center"
            >
              <Search size={14} />
            </button>
          </div>
          <ul className="max-h-[200px] custom-scrollbar overflow-y-auto">
            {filteredList.map((data) => (
              <li
                key={data.id}
                className={`${
                  users.includes(data) ? "opacity-50" : "opacity-100"
                } flex justify-between py-3 border-b-[1px] last:border-none`}
              >
                <div className="flex gap-2">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={data.image}
                    alt=""
                  />
                  <span className="font-medium text-sm">
                    {data.firstname} {data.lastname}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    users.includes(data)
                      ? setUsers((prevState) =>
                          prevState.filter((user) => user !== data)
                        )
                      : setUsers((prevState) => [...prevState, data]);
                  }}
                  className="border-[1px] border-gray-300 rounded-sm w-10 text-xl font-bold hover:bg-gray-300 transition-all duration-300 ml-2"
                >
                  {users.includes(data) ? "-" : "+"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
