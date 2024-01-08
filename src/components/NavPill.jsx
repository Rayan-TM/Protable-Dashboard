import React from "react";

export default function NavPill({ title, onChoose, isActive }) {
  const selectHandler = (e) => {
    const value = e.target.children[0];
    onChoose(value ? value.innerText : e.target.innerText);
  };

  return (
    <button
      onClick={selectHandler}
      className={`${isActive ? "active" : ""} profile-nav-pill`}
    >
      <span>{title}</span>
    </button>
  );
}
