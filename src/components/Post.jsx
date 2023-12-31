import React, { useContext } from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import DOMPurify from "dompurify";
import { globalContext } from "../Contexts/globalContext";

export default function Post({
  authorName,
  sharedTime,
  authorImage,
  contents,
  media,
  isComment,
  ...postFooterData
}) {
  const { toggleShadow } = useContext(globalContext);

  return (
    <div
      className={`${
        isComment ? "border-[1px] border-gray-300 mt-5 box-container" : ""
      } ${toggleShadow && isComment ? "shadow-active" : ""}`}
    >
      <PostHeader
        authorName={authorName}
        sharedTime={sharedTime}
        authorImage={authorImage}
      />
      {contents && (
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(contents) }}
        ></div>
      )}
      <PostFooter isComment={isComment} {...postFooterData} />
    </div>
  );
}
