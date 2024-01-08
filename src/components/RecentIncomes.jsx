import React, {useContext} from "react";
import RecentIncomeBox from "./RecentIncomeBox";
import RecentIncomeTable from "./RecentIncomeTable";
import { BarChart2, HandLizard, Dollar, ArrowDown, Calendar } from "./icons";
import SelectBox from "./SelectBox";
import useSelect from "../hooks/useSelect";
import { globalContext } from "../Contexts/globalContext";

export default function RecentIncomes() {

  const [title, selectHandler] = useSelect("امروز")
  const {toggleShadow} = useContext(globalContext)

  const recentIncomeInfoTemplate = [
    {
      id: 1,
      title: "سود ناخالص",
      icon: <BarChart2 color="#10B759" />,
      iconBorder: "border-green-500",
    },
    {
      id: 2,
      title: "کسر مالیات",
      icon: <HandLizard color="#FF3F3F" />,
      iconBorder: "border-red-500",
    },
    {
      id: 3,
      title: "سود خالص",
      icon: <Dollar color="#FFB822" />,
      iconBorder: "border-orange-100",
    },
  ];
  
  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container mt-8`}>
      <div className="flex justify-between ">
        <span className="text-sm">درآمدهای اخیر شما</span>
        <SelectBox
          icon={<ArrowDown size={10} />}
          options={["امروز", "دیروز", "7 روز اخیر", "30 روز اخیر", "این ماه"]}
          hasBorder
          title={
            <div className="flex gap-1 items-center">
              <Calendar size={15} />
              <span>{title}</span>
            </div>
          }
          onSelect={selectHandler}
        />
      </div>
      <div className="flex items-start gap-8 mt-7 pc:flex-wrap">
        <div className="w-1/2 flex flex-col gap-4 pc:w-full pc:flex-row pc:justify-between laptop:flex-col">
          {recentIncomeInfoTemplate.map((info) => (
            <RecentIncomeBox key={info.id} {...info} date={title} />
          ))}
        </div>
        <RecentIncomeTable />
      </div>
    </div>
  );
}
