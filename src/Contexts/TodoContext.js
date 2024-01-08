import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const baseUrl = "http://localhost:4000/todoPageItems";
  const { datas, editItem, setItem } = useFetch(baseUrl);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterLabel, setFilterLabel] = useState("فیلتر");
  const [searchValue, setSearchValue] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    filterItemsHandler();
  }, [filterLabel, datas]);

  function searchHandler() {
    setSearchedItems(
      filteredItems.filter((item) => item.title.includes(searchValue))
    );
  }

  function changeState(id, prop) {
    const filtereditem = datas.filter((data) => data.id === id);
    filtereditem[0][prop] = !filtereditem[0][prop];
    editItem(baseUrl, id, filtereditem[0]);
  }

  function filterItemsHandler() {
    let prop;
    filterLabel === "علاقه مندی ها"
      ? (prop = "hasStar")
      : filterLabel === "انجام شده"
      ? (prop = "isChecked")
      : filterLabel === "حذف شده"
      ? (prop = "isDeleted")
      : (prop = null);

    setFilteredItems(
      filterLabel === "فیلتر"
        ? datas.reverse()
        : datas.filter((data) => data[prop]).reverse()
    );
  }

  function sortItems(label) {
    let sorted;
    if (label === "صعودی") {
      sorted = [...filteredItems].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setFilteredItems(sorted);
    } else {
      sorted = [...filteredItems].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setFilteredItems(sorted);
    }
  }

  return (
    <TodoContext.Provider
      value={{
        datas,
        setFilteredItems,
        filteredItems,
        changeState,
        filterLabel,
        setFilterLabel,
        sortItems,
        searchValue,
        setSearchValue,
        setSelectedTodo,
        selectedTodo,
        setItem,
        searchedItems,
        searchHandler,
        isSideBarOpen,
        setIsSideBarOpen,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext };
