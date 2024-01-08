import React, { useContext } from "react";
import SelectBox from "./SelectBox";
import { ArrowDown, Search, BurgerMenu } from "./icons";
import { globalContext } from "../Contexts/globalContext";
import { TodoContext } from "../Contexts/TodoContext";

export default function TodoFilterBox() {
  const { toggleShadow } = useContext(globalContext);

  const {
    setFilterLabel,
    sortItems,
    searchValue,
    setSearchValue,
    searchHandler,
    setIsSideBarOpen,
  } = useContext(TodoContext);

  function filterHandler(title) {
    setFilterLabel(title);
  }

  function sortHandler(title) {
    sortItems(title);
  }

  return (
    <div
      className={`${
        toggleShadow ? "shadow-active" : ""
      } box-container flex gap-4`}
    >
      <button
        onClick={() => setIsSideBarOpen((prevState) => !prevState)}
        className="pc:block hidden border-[1px] hover:bg-gray-200 rounded-md px-3"
      >
        <BurgerMenu size={18} />
      </button>
      <SelectBox
        hasBorder
        title="فیلتر"
        icon={<ArrowDown size={12} />}
        options={["فیلتر", "علاقه مندی ها", "انجام شده", "حذف شده"]}
        onSelect={filterHandler}
      />
      <SelectBox
        hasBorder
        title="ترتیب"
        icon={<ArrowDown size={12} />}
        options={["صعودی", "نزولی"]}
        onSelect={sortHandler}
      />
      <div className="border-[1px] rounded-md border-gray-300 overflow-hidden flex mr-auto w-1/2">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className="outline-none text-sm px-3 py-2 w-full"
          type="text"
          placeholder="جستجوی وظیفه"
        />
        <button
          onClick={searchHandler}
          className="w-10 border-r-[1px] border-gray-300 flex justify-center items-center"
        >
          <Search size={14} />
        </button>
      </div>
    </div>
  );
}
