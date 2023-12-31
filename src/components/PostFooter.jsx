import React from "react";
import { Heart, Share, Message2 } from "./icons";
import PostIcon from "./PostIcon";
import SmallButton from "./SmallButton";

export default function PostFooter({isComment, likes, replies, shared}) {
  return (
    <div className="flex justify-between relative">
      <div className="flex gap-2">
        <SmallButton title="لایک">
          <PostIcon number={likes} icon={<Heart size={16} />} />
        </SmallButton>
        {isComment && <button className="text-xs font-medium">پاسخ</button>}
      </div>
      {!isComment && (
        <div className="flex ">
          <SmallButton title="دیدگاه‌ها">
            <PostIcon number={replies} icon={<Message2 size={16} />} />
          </SmallButton>
          <SmallButton title="اشتراک گذاری">
            <PostIcon number={shared} icon={<Share size={16} />} />
          </SmallButton>
        </div>
      )}
    </div>
  );
}
