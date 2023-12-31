import React, { useContext } from "react";
import { Gear } from './icons';
import CustomCheckbox from "./CustomCheckbox";
import { globalContext } from "../Contexts/globalContext";

export default function SettingPanel() {
  const contextData = useContext(globalContext)

  return (
    <div
      className="flex items-center fixed left-0 top-1/2 -translate-y-1/2 z-10 overflow-hidden"
    >
      <div
        onClick={() => contextData.setToggleSetting((prevState) => !prevState)}
        className="p-4 rounded-s-md bg-blue-500 cursor-pointer"
      >
        <Gear size={20} color="#fff" />
      </div>
      <div
        className={`text-[13px] w-60 font-medium transition-all duration-700  ${
          contextData.toggleSetting ? "-ml-60" : "w-60"
        } bg-white rounded-s-lg border-[1px] border-blue-500 px-5 py-8`}
      >
        <span>تغییر طرح</span>
        <div className="mt-7 flex flex-col gap-5">
          <CustomCheckbox setToggle={contextData.setToggleShadow} label="طرح سایه" />
          <CustomCheckbox setToggle={contextData.setToggleFixedHeader} label="هدر چسبان" />
          <CustomCheckbox setToggle={contextData.setToggleLightHeader} label="هدر روشن" />
          <CustomCheckbox setToggle={contextData.setToggleFixedFooter} label="فوتر چسبان" />
        </div>
      </div>
    </div>
  );
}
