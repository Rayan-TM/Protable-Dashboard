import React from "react";
import { NavLink } from "react-router-dom";

export default function DropLeftItem({ links, title, children }) {
  return (
    <li className="small group relative px-5 py-1">
      <div className="py-2">
        {children}
        <div className="group-hover:block hidden absolute -left-[200px] top-0 w-[200px] bg-white border-[1px] border-gray-300 z-10">
          <span className="text-xs p-3 block">{title}</span>
          {links.map((item) => (
            <NavLink
              key={item.src}
              className="hover:bg-[#ecf1f3] p-3 drop-left-item"
              to={item.src}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </li>
  );
}
