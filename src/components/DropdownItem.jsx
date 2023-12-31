import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {ArrowDown} from './icons';

export default function DropdownItem({ children, links, title }) {
  const [toggle, setToggle] = useState(false);
  const [dropdownContentHeight, setDropdownContentHeight] = useState(0);
  const dropdownContent = useRef();

  useEffect(() => {
    setDropdownContentHeight(toggle ? dropdownContent.current.scrollHeight : 0);
  }, [toggle]);

  return (
    <div>
      <li
        onClick={() => setToggle((prevState) => !prevState)}
        className="dropdown-btn flex justify-between items-center cursor-pointer px-7 py-3"
      >
        <div className="flex items-center gap-2 ">
          {children}
          <span>{title}</span>
        </div>
        <ArrowDown
          className={`${toggle && "active"} dropdown-arrow`}
          size={12}
        />
      </li>
      <ul
        ref={dropdownContent}
        style={{ height: dropdownContentHeight + "px" }}
        className={`dropdown-content`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.src}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
