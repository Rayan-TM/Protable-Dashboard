import React, {useContext} from "react";
import { ArrowDown } from "./icons";
import SelectBox from "./SelectBox";
import TicketChart from "./Charts/TicketChart";
import useFetch from '../hooks/useFetch'
import useSelect from "../hooks/useSelect";
import { globalContext } from "../Contexts/globalContext";

export default function TicketState() {
  const {datas} = useFetch("http://localhost:4000/ticketStateDatas")
  const [title, selectHandler] = useSelect("2018")
  const {toggleShadow} = useContext(globalContext)

  const ticketStateData = datas.find(data => data.date === title)
  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container w-[70%]`}>
      <div className="flex justify-between mb-5">
        <span className="text-sm">وضعیت تیکت</span>
        <SelectBox
          icon={<ArrowDown size={10} />}
          title={title}
          options={["2018", "2017"]}
          hasBorder
          onSelect={selectHandler}
        />
      </div>
      <TicketChart datas={ticketStateData?.chartData}/>
    </div>
  );
}
