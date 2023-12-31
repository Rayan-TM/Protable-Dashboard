import React, {useContext} from "react";
import Trash from "./icons/Trash";
import { Link } from "react-router-dom";
import useNavigation from "../hooks/useNavigation";
import { globalContext } from "../Contexts/globalContext";

export default function LargeTable({pageTitle, thead, tbody, onRemove, subject }) {
  const {toggleShadow} = useContext(globalContext)

  const { pagesNumber, pageItems, currentPage, changePage } =
    useNavigation(tbody);

  function removeItem(id) {
    onRemove(id);
  }

  return (
    <div className="p-10 text-right">
      <div className={`${toggleShadow ? "shadow-active" : ""} box-container border-2 border-gray-300 flex flex-col items-center`}>
        <h1 className="font-bold text-3xl mb-3">{pageTitle}</h1>
        <table className="large-table w-full ">
          <thead>
            <tr>
              {thead.map((title) => (
                <th key={title}>{title}</th>
              ))}
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((content) => (
              <tr key={content.id}>
                <td>{content.id}</td>
                {subject === "contacts" ? (
                  <>
                    <td>
                      {content.firstname} {content.lastname}
                    </td>
                    <td>{content.email ? content.email : "ندارد"}</td>
                    <td>{content.phone}</td>
                  </>
                ) : (
                  <>
                    <td>{content.name}</td>
                    <td>{content.stock}</td>
                  </>
                )}

                <td>{content.status ? "فعال" : "غیرفعال"}</td>
                {subject === "contacts" ? (
                  <td>{content.address ? content.address : "ندارد"}</td>
                ) : (
                  <td>{content.price}</td>
                )}
                <td className="flex items-center gap-3">
                  <Link
                    to={
                      subject === "contacts"
                        ? `/edit_contact/${content.id}`
                        : `/product/${content.id}`
                    }
                    className="p-2 text-white bg-green-500 text-xs rounded-md"
                  >
                    {subject === "contacts" ? "ویرایش" : "نمایش"}
                  </Link>
                  <button onClick={() => removeItem(content.id)}>
                    <Trash color="#FF3F3F" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="flex mt-5 rounded-md overflow-hidden">
          {pagesNumber.map((page) => (
            <li
              key={page}
              onClick={() => changePage(page + 1)}
              className={`${
                page + 1 === currentPage ? "bg-gray-400 text-white" : ""
              } bg-gray-300 hover:text-white py-2 px-3 hover:bg-gray-400 cursor-pointer`}
            >
              <span>{page + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
