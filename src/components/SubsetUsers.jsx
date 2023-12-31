import React, {useContext} from "react";
import SubsetUser from "./SubsetUser";
import Avatar from "./Avatar";
import useFetch from '../hooks/useFetch'
import { globalContext } from "../Contexts/globalContext";

export default function SubsetUsers() {
  const {toggleShadow} = useContext(globalContext)
  const {datas, isPending, error} = useFetch('http://localhost:4000/users?_end=4')

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container flex flex-col mt-8`}>
      <span className="text-sm">کاربران زیر مجموعه من</span>
      <div className="mb-5">
        {datas.map((info) => (
          <SubsetUser key={info.id} {...info}>
            <Avatar src={info.image} badgeColor="before:bg-green-500"/>
          </SubsetUser>
        ))}
      </div>
      <button className="font-medium text-sm">مشاهده همه</button>
    </div>
  );
}
