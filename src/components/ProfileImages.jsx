import React, {useContext} from "react";
import ButtonEdit from "./ButtonEdit";
import { Uploader } from "./icons";
import { globalContext } from "../Contexts/globalContext";


export default function ProfileImages() {
  const {toggleShadow} = useContext(globalContext)
  const profileImagesSrc = ["one", "two", "three", "four", "five", "six"];

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container mt-8`}>
      <div className="flex justify-between items-center mb-8 group">
        <span className="text-sm">تصاویر</span>
        <ButtonEdit
          classes="font-bold"
          title="آپلود"
          icon={<Uploader size={14} />}
        />
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {profileImagesSrc.map((imgSrc) => (
          <img
            key={imgSrc}
            alt="profile images"
            className="rounded-md w-20"
            src={`./assets/images/portfolio-${imgSrc}.jpg`}
          />
        ))}
      </div>
    </div>
  );
}
