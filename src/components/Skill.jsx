import React from "react";

export default function Skill({ icon, skill, percent, color }) {
  const skillIcon = icon({ size: 15, color });
  return (
    <div>
      <div className="flex items-center gap-3">
        <div
          style={{ borderColor: color }}
          className="w-7 h-7 rounded-full border-2 flex justify-center items-center"
        >
          {skillIcon}
        </div>
        <span className="text-xs text-gray-300">{skill}</span>
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="rounded-full flex overflow-hidden h-[5px] bg-gray-200 w-full">
          <div style={{ backgroundColor: color, width: percent + "%" }}></div>
        </div>
        <span>{percent}%</span>
      </div>
    </div>
  );
}
