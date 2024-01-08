import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "./icons";
import useDropDown from "../hooks/useDropDown";
import SelectBox from "./SelectBox";

export default function SelectTodoDate({onChange}) {
  const months = [
    "ژانویه",
    "فوریه",
    "مارس",
    "آوریل",
    "مه",
    "ژوئن",
    "جولای",
    "اگوست",
    "سپتامبر",
    "اکتبر",
    "نوامبر",
    "دسامبر",
  ];
  const date = new Date();
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const years = [];

  const dateBox = useRef();
  const [isBoxOpen, setIsBoxOpen] = useDropDown(dateBox);
  const [currentYear, setCurrentYear] = useState(year);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    date.getMonth() + 1
  );
  const [amountDays, setAmountDays] = useState(31);
  const [currentDay, setCurrentDay] = useState(date.getDay());

  for (let i = year; i <= year + 100; i++) {
    years.push(i);
  }

  useEffect(() => {
    onChange(`${currentYear}/${currentMonthIndex}/${currentDay}`)
  })

  useEffect(() => {
    if ([1, 3, 5, 7, 8, 10, 12].includes(currentMonthIndex)) {
      setAmountDays(31);
    } else if ([4, 6, 9, 11].includes(currentMonthIndex)) {
      setAmountDays(30);
    } else {
      setAmountDays(29);
    }
  }, [currentMonthIndex]);

  function selectMonth(value) {
    setCurrentMonthIndex(months.findIndex((month) => month === value) + 1);
  }

  return (
    <div ref={dateBox} className="ml-3 w-full relative date-picker">
      <input
        className="font-medium"
        onClick={() => setIsBoxOpen((prevState) => !prevState)}
        type="text"
        readOnly
        value={`${currentYear}/${currentMonthIndex}/${currentDay}`}
      />
      <div
        className={`${
          isBoxOpen ? "block" : "hidden"
        } border-[1px] border-gray-300 absolute z-[1000] bg-white shadow-lg min-w-full mt-2 rounded-sm`}
      >
        <div className="border-l-[1px] border-t-[1px] border-gray-300 rotate-45 w-2 h-2 absolute bg-white -top-1 right-1"></div>
        <div className="flex gap-2 p-2">
          <SelectBox
            options={months}
            icon={<ArrowDown size={12} />}
            title={month}
            hasBorder
            onSelect={selectMonth}
          />
          <SelectBox
            options={years}
            icon={<ArrowDown size={12} />}
            title={year}
            hasBorder
            onSelect={(value) => setCurrentYear(value)}
          />
        </div>
        <div className="days grid grid-cols-7 text-center p-1 text-xs font-bold">
          {[...Array(amountDays).keys()].map((day) => (
            <div
              key={day}
              onClick={() => setCurrentDay(day + 1)}
              className={`${
                day + 1 === currentDay ? "bg-blue-500 text-white" : ""
              } hover:bg-blue-200 py-1 rounded-md cursor-pointer`}
            >
              {day + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
