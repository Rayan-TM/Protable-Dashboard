import React, { useEffect, useState, useRef } from "react";
import useDropDown from "../hooks/useDropDown";

export default function SelectTodoTime({ onChange }) {
  let time = new Date();
  const timeBox = useRef();
  const [isBoxOpen, setIsBoxOpen] = useDropDown(timeBox);
  const [minuteValue, setMinuteValue] = useState(time.getMinutes());
  const [hourValue, setHourValue] = useState(time.getHours());

  useEffect(() => {
    if (minuteValue > 59) {
      setMinuteValue(0);
      setHourValue((prevState) => ++prevState);
    }
    if (minuteValue < 0) {
      setMinuteValue(59);
      setHourValue((prevState) => --prevState);
    }
    hourValue < 0 && setHourValue(23);
    hourValue > 23 && setHourValue(0);
    formatTime();
    onChange(`${minuteValue} : ${hourValue}`);
  }, [minuteValue, hourValue]);

  function formatTime() {
    if (hourValue < 10) {
      setHourValue((prevState) => ("0" + prevState).slice(-2));
    }

    if (minuteValue < 10) {
      setMinuteValue((prevState) => ("0" + prevState).slice(-2));
    }
  }

  function changeHour(e) {
    setHourValue(e.target.value);

    if (e.target.value > 23) {
      setHourValue(23);
    } else if (e.target.value < 0) {
      setHourValue("00");
    }
  }

  function changeMinute(e) {
    if (e.target.value > 59) {
      setHourValue(59);
    } else if (e.target.value < 0) {
      setHourValue("00");
    }
  }

  return (
    <div ref={timeBox} className="time-picker relative">
      <div onClick={() => setIsBoxOpen((prevState) => !prevState)}>
        <input
          className="font-medium"
          type="text"
          readOnly
          value={`${minuteValue} : ${hourValue}`}
        />
      </div>
      <div
        className={`${
          isBoxOpen ? "flex" : "hidden"
        } border-[1px] items-center border-gray-300 absolute top-[calc(100%+5px)] z-10 bg-gray-200 rounded-md`}
      >
        <div className="minute">
          <div
            onClick={() => setMinuteValue((prevState) => ++prevState)}
            className="up"
          ></div>
          <input type="number" value={minuteValue} onChange={changeMinute} />
          <div
            onClick={() => setMinuteValue((prevState) => --prevState)}
            className="down"
          ></div>
        </div>

        <div className="font-bold text-xl mb-1">:</div>
        <div className="hour">
          <div
            onClick={() => setHourValue((prevState) => ++prevState)}
            className="up"
          ></div>
          <input type="number" value={hourValue} onChange={changeHour} />
          <div
            onClick={() => setHourValue((prevState) => --prevState)}
            className="down"
          ></div>
        </div>
      </div>
    </div>
  );
}
