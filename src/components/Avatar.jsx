import React from "react";

export default function Avatar({
  avatarSize = 45,
  badgeColor,
  badgeSize = "before:w-4 before:h-4",
  src,
  avatarClass,
}) {
  return (
    <div style={{width: avatarSize, height: avatarSize}} className={`${avatarClass} relative overflow-hidden`}>
      <img src={src} alt="avatar" className="rounded-full" />
      {badgeColor && (
        <span
          className={`before:border-white before:border-[3px] before:rounded-full before:absolute before:top-0 before:left-0 translate-x-2/4 ${badgeColor} ${badgeSize} z-10`}
        ></span>
      )}
    </div>
  );
}

//
