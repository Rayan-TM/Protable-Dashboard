import React, { useContext, useEffect, useState } from "react";
import SubsetUser from "./SubsetUser";
import Avatar from "./Avatar";
import useFetch from "../hooks/useFetch";
import { globalContext } from "../Contexts/globalContext";
import Loader from "./Loader";

export default function SubsetUsers() {
  const { toggleShadow } = useContext(globalContext);
  const [limit, setLimit] = useState(4);
  const { datas, isPending, error } = useFetch(`http://localhost:4000/users`);
  const [limitedUsers, setLimitedUsers] = useState();

  function limitUsers() {
    setLimitedUsers(datas.slice(0, limit));
  }

  function changeLimitation() {
    if (limitedUsers.length >= datas.length) {
      setLimit((prevLimit) => (prevLimit -= 4));
    } else {
      setLimit((prevLimit) => (prevLimit += 4));
    }
  }

  useEffect(() => {
    limitUsers();
  }, [datas]);

  useEffect(() => {
    limitUsers();
  }, [limit]);

  return (
    <div
      className={`${
        toggleShadow ? "shadow-active" : ""
      } box-container flex flex-col mt-8`}
    >
      <span className="text-sm">کاربران زیر مجموعه من</span>
      <div className="h-[356px] overflow-hidden overflow-y-auto custom-scrollbar">
        {error && error}
        {isPending ? (
          <Loader />
        ) : (
          limitedUsers.map((info) => (
            <SubsetUser key={info.id} {...info}>
              <Avatar src={info.image} badgeColor="before:bg-green-500" />
            </SubsetUser>
          ))
        )}
      </div>
      <button
        onClick={() => changeLimitation()}
        className="font-medium text-sm"
      >
        {limitedUsers?.length < datas.length ? "مشاهده بیشتر" : "مشاهده کمتر"}
      </button>
    </div>
  );
}
