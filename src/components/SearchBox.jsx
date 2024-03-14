import React, { useState } from "react";
import { Search } from "./icons";

export default function SearchBox({
  setSearchItems,
  allItems,
  factor,
  placeholder,
  customStyles = "w-1/2",
}) {
  const [searchValue, setSearchValue] = useState("");

  function searchHandler() {
    setSearchItems(
      allItems.filter((item) => item[factor].includes(searchValue))
    );
  }
  return (
    <div
      className={`border-[1px] rounded-md border-gray-300 overflow-hidden flex mr-auto ${customStyles}`}
    >
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className="outline-none text-sm px-3 py-2 w-full"
        type="text"
        placeholder={placeholder}
      />
      <button
        onClick={searchHandler}
        className="w-10 border-r-[1px] border-gray-300 flex justify-center items-center"
      >
        <Search size={14} />
      </button>
    </div>
  );
}
