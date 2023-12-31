import React from "react";
import SelectBox from "./SelectBox";
import { MoreVertical } from "./icons";
import Avatar from "./Avatar";

export default function PostHeader({authorName, sharedTime, authorImage}) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-4">
        <Avatar avatarSize={30} src={authorImage} />
        <div>
          <h4 className="text-sm mb-1">
            <span className="font-medium">{authorName}</span> یک لینک به اشتراک
            گذاشت
          </h4>
          <span className="text-xs text-gray-300">{sharedTime}</span>
        </div>
      </div>
      <SelectBox
        options={["اشتراک گذاری", "ویرایش", "حذف"]}
        icon={<MoreVertical size={15} />}
      />
    </div>
  );
}
