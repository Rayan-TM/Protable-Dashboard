import React, {useContext} from "react";
import { User, Star, BarChart2, CloudUpload } from "./icons";
import Skill from "./Skill";
import useFetch from '../hooks/useFetch'
import { globalContext } from "../Contexts/globalContext";

export default function ProfileSkills() {
  const icons = [User,Star,BarChart2,CloudUpload]
  const {toggleShadow} = useContext(globalContext)

  const {datas, isPending, error} = useFetch('http://localhost:4000/profileSkillsDatas')
  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container mt-8`}>
      <span className="text-sm mb-8 block">مهارت‌ها</span>
      <div className="font-medium flex flex-col gap-6">
        {datas.map((data, index) => (
          <Skill key={data.id} {...data} icon={icons[index]}/>
        ))}
      </div>
    </div>
  );
}
