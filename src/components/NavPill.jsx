import React from "react";

export default function NavPill({ title, children, onChoose, isActive }) {

  const selectHandler = (e) => {
    const value = e.target.children[0]
    onChoose(value ? value.innerText : e.target.innerText)
  }

  return (
    <button
      onClick={selectHandler}
      className={`${isActive ? "active" : ""} profile-nav-pill`}
    >
      <span>{title}</span>
      {children && (
        <span className="py-0.5 px-2 rounded-md bg-gray-400 mr-2 text-white text-[11px]">
          {children}
        </span>
      )}
    </button>
  );
}
