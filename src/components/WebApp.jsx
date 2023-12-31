import React from "react";
import { Link } from "react-router-dom";

export default function WebApp({ icon, name, href }) {
  return (
    <Link
      className="border-[1px] rounded-md flex flex-col gap-3 p-3 text-sm items-center w-full mb-2"
      to={href}
    >
      {icon}
      <span className="text-xs font-medium">{name}</span>
    </Link>
  );
}
