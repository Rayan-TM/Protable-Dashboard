import React, { useState } from "react";
import SelectTodoLabel from "./SelectTodoLabel";
import { Cancel } from "./icons";
import { createPortal } from "react-dom";
import SelectTodoTime from "./SelectTodoTime";
import SelectTodoDate from "./SelectTodoDate";
import SelectTodoParticipants from "./SelectTodoParticipants";

export default function NewTodoForm({ allItems, closeForm, submitForm }) {
  const [activeLabels, setActiveLabels] = useState([allItems[0]]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submitHandler() {
    const newTodoValues = {
      isChecked: false,
      hasStar: false,
      title,
      content: description,
      labels: activeLabels.map((label) => label.name),
      date,
      time,
      participants: selectedUsers,
      isDeleted: false,
    };
    submitForm(newTodoValues);
  }

  return createPortal(
    <div className="modal">
      <div className="bg-white rounded-lg w-[400px] mx-10">
        <div className="flex justify-between bg-gray-200 p-5 rounded-t-md">
          <span className="font-bold">وظیفه جدید</span>
          <button onClick={closeForm} className="bg-white rounded-full">
            <Cancel color="#000" />
          </button>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="new-todo-form flex flex-col items-start gap-3 p-5 h-full"
        >
          <div>
            <label htmlFor="title">عنوان وظیفه</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="label">برچسب ها</label>
            <SelectTodoLabel
              onChange={(value) => setActiveLabels(value)}
              options={allItems}
              values={activeLabels}
            />
          </div>
          <div className="flex">
            <label htmlFor="title">فرصت نهایی</label>
            <div className="flex w-full">
              <SelectTodoDate onChange={(value) => setDate(value)} />
              <SelectTodoTime onChange={(value) => setTime(value)} />
            </div>
          </div>
          <div>
            <label htmlFor="title">مشارکت کنندگان</label>
            <SelectTodoParticipants
              users={selectedUsers}
              setUsers={setSelectedUsers}
            />
          </div>
          <div>
            <label htmlFor="description">توضیحات</label>
            <textarea
              className="outline-none border-[1px] border-gray-300 p-2 rounded-md text-sm w-full"
              id="description"
              cols="30"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={submitHandler}
            className="bg-blue-500 text-white px-3 py-2 rounded-md w-full"
            type="submit"
          >
            ایجاد
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
