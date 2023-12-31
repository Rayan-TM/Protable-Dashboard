import React, {useContext} from "react";
import useFetch from "../hooks/useFetch";
import Avatar from "./Avatar";
import DOMPurify from "dompurify";
import { globalContext } from "../Contexts/globalContext";

export default function ProfileTimeLine() {
  const { datas, isPending, error } = useFetch("http://localhost:4000/posts");
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container mt-8`}>
      <h3 className="text-sm mb-8">خط زمانی</h3>
      {datas.map((data) => (
        <div className="flex gap-3 relative before:content-[''] before:w-[2px] before:absolute before:top-8 before:bottom-0 before:right-3 before:bg-gray-200">
          <Avatar avatarSize={30} src={data.authorImage} />
          <div className="w-full">
            <div className="flex justify-between">
              <h4 className="text-sm mb-1 font-medium">
                <span>{data.authorName}</span> یک لینک
                به اشتراک گذاشت
              </h4>
              <span className="text-gray-300 text-sm">{data.sharedTime}</span>
            </div>
            <div
              className="post-content my-6 border-2 p-3 pt-0 rounded-md"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.contents) }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
