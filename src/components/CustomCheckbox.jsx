import React from "react";

export default function CustomCheckbox({ label, setToggle }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-4">
        <input
          onClick={() => setToggle((prevState) => !prevState)}
          className="custom-checkbox absolute hidden"
          id={label}
          type="checkbox"
        />
        <label className="custom-checkbox-label" htmlFor={label}></label>
      </div>
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
