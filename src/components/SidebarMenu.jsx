import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart1,
  Messages,
  CheckCircle,
  Users,
  User,
  UserPlus,
  ShopBag,
  Copy,
} from "./icons";
import DropLeftItem from "./DropLeftItem";
import SmallButton from "./SmallButton";
import { globalContext } from "../Contexts/globalContext";
import LargeSidebarMenu from "./LargeSidebarMenu";

export default function SidebarMenu({ menuItems }) {
  const { toggleSidebar } = useContext(globalContext);

  return (
    <>
      {toggleSidebar ? (
        <ul className="sidebar-menu small">
          <hr className="my-5" />
          <DropLeftItem {...menuItems[0]}>
            <BarChart1 size={22} color="#BABABA" />
          </DropLeftItem>
          <li className="relative small group ">
            <NavLink to="/chat">
              <SmallButton
                direction="group-hover:right-[50px] right-0 top-0"
                isInMenu
                title="گفتگو"
              >
                <Messages size={22} stroke="#BABABA" />
              </SmallButton>
            </NavLink>
          </li>
          <li className="relative small group">
            <NavLink to="/todo">
              <SmallButton
                direction="group-hover:right-[50px] right-0 top-0"
                isInMenu
                title="برای انجام"
              >
                <CheckCircle size={22} color="#BABABA" />
              </SmallButton>
            </NavLink>
          </li>
          <hr className="my-5" />
          <li className="relative small group">
            <NavLink to="/contacts">
              <SmallButton
                direction="group-hover:right-[50px] right-0 top-0"
                isInMenu
                title="مخاطبین"
              >
                <Users size={22} color="#BABABA" />
              </SmallButton>
            </NavLink>
          </li>
          <li className="relative small group">
            <NavLink to="/new_contact">
              <SmallButton
                direction="group-hover:right-[50px] right-0 top-0"
                isInMenu
                title="مخاطب جدید"
              >
                <UserPlus size={22} color="#BABABA" />
              </SmallButton>
            </NavLink>
          </li>
          <li className="relative small group">
            <NavLink to="/products">
              <SmallButton
                direction="group-hover:right-[50px] right-0 top-0"
                isInMenu
                title="محصولات"
              >
                <ShopBag size={22} color="#BABABA" />
              </SmallButton>
            </NavLink>
          </li>
          <hr className="my-5" />
          <DropLeftItem {...menuItems[1]}>
            <User size={22} color="#BABABA" />
          </DropLeftItem>
          <DropLeftItem {...menuItems[2]}>
            <Copy size={22} color="#BABABA" />
          </DropLeftItem>
        </ul>
      ) : (
        <LargeSidebarMenu menuItems={menuItems}/>
      )}
    </>
  );
}
