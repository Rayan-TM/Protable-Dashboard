import React from "react";

export default function PostIcon({ icon, number }) {
  return (
    <div className="flex items-center gap-1">
      {icon}
      <span className="text-xs font-medium">{number}</span>
    </div>
  );
}
