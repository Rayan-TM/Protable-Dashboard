import React, { useContext } from "react";
import { User, Settings, Logout } from "./icons";
import { Avatar, SmallButton } from ".";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../Contexts/globalContext";

export default function TopSidebar() {
  const { toggleSidebar, setToggleSetting, loggedInUser } =
    useContext(globalContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("Token");
    navigate("/login");
  }

  function toggleSetting() {
    setToggleSetting((prevState) => !prevState);
  }
  return (
    loggedInUser && (
      <div className="text-center p-4">
        <h1 className="font-bold text-2xl mt-2">
          <Link to="/">
            {toggleSidebar ? (
              <span className="text-blue-500 text-4xl">P</span>
            ) : (
              <>
                Pro<span className="text-blue-500">table</span>
              </>
            )}
          </Link>
        </h1>

        <Avatar
          avatarClass="mx-auto mt-5"
          src={loggedInUser.image}
          badgeColor="before:bg-green-500"
        />
        {!toggleSidebar && (
          <>
            <span className="font-medium text-[17px] mt-4 block">
              {loggedInUser.firstname} {loggedInUser.lastname}
            </span>
            <span className="text-gray-300 text-[13px] mt-2 block">
              {loggedInUser.role}
            </span>

            <div className="flex gap-3 justify-center my-5 relative">
              <Link to="/profile">
                <SmallButton title="پروفایل" bgColor="bg-blue-100">
                  <User size={15} />
                </SmallButton>
              </Link>
              <SmallButton
                onClickHandler={toggleSetting}
                title="تنظیمات"
                bgColor="bg-green-100"
              >
                <Settings size={15} />
              </SmallButton>
              <SmallButton
                onClickHandler={logout}
                title="خروج"
                bgColor="bg-red-100"
              >
                <Logout size={15} />
              </SmallButton>
            </div>
          </>
        )}
      </div>
    )
  );
}
