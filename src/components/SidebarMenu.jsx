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
import DropdownItem from "./DropdownItem";
import DropLeftItem from "./DropLeftItem";
import SmallButton from "./SmallButton";
import { globalContext } from "../Contexts/globalContext";

export default function SidebarMenu() {
  const { toggleSidebar } = useContext(globalContext);

  const sidebarMenuItems = [
    {
      title: "داشبورد",
      links: [
        { id: 1, title: "داشبورد 1", src: "/" },
        { id: 2, title: "داشبورد 2", src: "/dashboard_support" },
      ],
    },
    {
      title: "احراز هویت",
      links: [
        { id: 1, title: "ورود", src: "/login" },
        { id: 2, title: "ثبت نام", src: "/register" },
        { id: 3, title: "بازیابی رمز عبور", src: "/password_recovery" },
      ],
    },
    {
      title: "صفحات",
      links: [
        { id: 1, title: "پروفایل", src: "/profile" },
        { id: 2, title: "جدول قیمت ها", src: "/price_table" },
      ],
    },
  ];

  return (
    <>
      {toggleSidebar ? (
        <ul className="sidebar-menu small">
          <hr className="my-5" />
          <DropLeftItem {...sidebarMenuItems[0]}>
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
          <DropLeftItem {...sidebarMenuItems[1]}>
            <User size={22} color="#BABABA" />
          </DropLeftItem>
          <DropLeftItem {...sidebarMenuItems[2]}>
            <Copy size={22} color="#BABABA" />
          </DropLeftItem>
        </ul>
      ) : (
        <ul className="sidebar-menu">
          <span className="menu-category">اصلی</span>
          <DropdownItem {...sidebarMenuItems[0]}>
            <BarChart1 size={17} color="#BABABA" />
          </DropdownItem>
          <li className="sidebar-single-item">
            <Messages size={17} stroke="#BABABA" />
            <NavLink to="/chat">گفتگو</NavLink>
          </li>
          <li className="sidebar-single-item">
            <CheckCircle size={17} color="#BABABA" />
            <NavLink to="/todo">برای انجام</NavLink>
          </li>

          <span className="menu-category">دسترسی سریع</span>
          <li className="sidebar-single-item">
            <Users size={17} color="#BABABA" />
            <NavLink to="/contacts">مخاطبین</NavLink>
          </li>
          <li className="sidebar-single-item">
            <UserPlus size={17} color="#BABABA" />
            <NavLink to="/new_contact">مخاطب جدید</NavLink>
          </li>
          <li className="sidebar-single-item">
            <ShopBag size={17} color="#BABABA" />
            <NavLink to="/products">محصولات</NavLink>
          </li>

          <span className="menu-category">متفرقه</span>
          <DropdownItem {...sidebarMenuItems[1]}>
            <User size={17} color="#BABABA" />
          </DropdownItem>
          <DropdownItem {...sidebarMenuItems[2]}>
            <Copy size={17} color="#BABABA" />
          </DropdownItem>
        </ul>
      )}
    </>
  );
}
