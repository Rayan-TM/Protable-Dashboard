import React, {useContext} from "react";
import { File, Video, Image } from "./icons";
import SmallButton from "./SmallButton";
import { globalContext } from "../Contexts/globalContext";

export default function NewPost() {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container`}>
      <form>
        <textarea
          className="w-full min-h-[70px] border-[1px] border-gray-300 outline-none rounded-md text-sm p-2 placeholder:text-gray-300"
          placeholder="چیزی ایجاد کنید"
        ></textarea>
        <div className="flex justify-end gap-3 mt-2 relative">
          <SmallButton hasBorder title="افزودن تصویر">
            <Image size={14} />
          </SmallButton>
          <SmallButton hasBorder title="افزودن ویدیو">
            <Video size={14} />
          </SmallButton>
          <SmallButton hasBorder title="افزودن فایل">
            <File size={14} />
          </SmallButton>
          <button className="rounded-md px-4 text-sm text-white bg-blue-500  hover:bg-[#0023eb] ">
            ثبت
          </button>
        </div>
      </form>
    </div>
  );
}
