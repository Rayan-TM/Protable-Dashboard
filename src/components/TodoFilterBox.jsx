import React, { useContext } from "react";
import SelectBox from "./SelectBox";
import { ArrowDown, Search, BurgerMenu } from "./icons";
import { globalContext } from "../Contexts/globalContext";
import { TodoContext } from "../Contexts/TodoContext";
import SearchBox from "./SearchBox";

export default function TodoFilterBox() {
  const { toggleShadow } = useContext(globalContext);
  const {
    setFilterLabel,
    sortItems,
    setSearchedItems,
    filteredItems,
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
      <SearchBox
        placeholder="جستجوی وظیفه"
        allItems={filteredItems}
        setSearchItems={setSearchedItems}
      />
    </div>
  );
}
